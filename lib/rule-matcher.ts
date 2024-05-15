import {
  AbstractNode,
  AllDockerNodes,
  DockerFile,
  enricher,
} from "@tdurieux/dinghy";
import { ALL_RULES } from "./rules";
import { Rule } from "./rules";

export class Violation {
  constructor(
    readonly rule: Rule,
    readonly node: AbstractNode<AllDockerNodes>
  ) {}

  public async repair(opt = { clone: false }) {
    if (this.isStillValid()) {
      let node = this.node;
      if (opt.clone) {
        const parent =
          this.node instanceof DockerFile
            ? this.node.clone()
            : this.node.getParent(DockerFile)?.clone();
        if (parent == null) {
          console.error("Dockerfile not found in parent");
          return this.node;
        }
        parent.traverse((n) => {
          if (
            node.type == n.type &&
            node.position.equals(n.position) &&
            this.node.toString() == n.toString()
          ) {
            node = n;
          }
        });
      }
      await this.rule.repair(node as any);
      return node;
    }
    return this.node;
  }

  public isStillValid(): boolean {
    const newViolations = new Matcher(this.node, { toEnrich: false }).match(
      this.rule
    );
    return newViolations.length > 0;
  }

  public toString(): string {
    return `[VIOLATION] -> ${this.rule.name} at ${this.node.position}
        ${this.rule.description}
                ${this.node
                  .toString(false)
                  .replace(/\n/g, "\n                ")}`;
  }
}

export class Matcher {
  private _root: AbstractNode<AllDockerNodes>;

  constructor(
    root: AbstractNode<AllDockerNodes>,
    { toEnrich } = { toEnrich: true }
  ) {
    this._root = toEnrich ? enricher.default(root) : root;
  }

  /**
   * Get the transformed node (enriched and abstracted)
   */
  get node() {
    return this._root;
  }

  /**
   * Match a rule
   * @param rule
   * @returns
   */
  public match(rule: Rule) {
    const violations: Violation[] = [];

    // find the nodes that may contain a violation
    const candidates = this._root.find(rule.query);

    for (const candidate of candidates) {
      if (
        !rule.consequent ||
        (!rule.consequent.inNode &&
          !rule.consequent.beforeNode &&
          !rule.consequent.afterNode)
      ) {
        // if no post-validation add the violation and continue to the next candidate
        violations.push(new Violation(rule, candidate));
        continue;
      }

      if (
        rule.consequent.inNode &&
        candidate.find(rule.consequent.inNode).length > 0
      ) {
        continue;
      }

      if (rule.consequent.beforeNode !== undefined) {
        const query = rule.consequent.beforeNode;
        const nodeToCheck = getPreviousAndNextParentNodes(
          candidate,
          true,
          rule.scope === "INTRA-DIRECTIVE"
        );
        if (nodeToCheck.some((c) => c.find(query).length != 0)) {
          continue;
        }
      }
      if (rule.consequent.afterNode !== undefined) {
        const query = rule.consequent.afterNode;
        const nodeToCheck = getPreviousAndNextParentNodes(
          candidate,
          false,
          rule.scope === "INTRA-DIRECTIVE"
        );
        if (nodeToCheck.some((c) => c.find(query).length != 0)) {
          continue;
        }
      }

      // if the 3 checks are good a violation has been found
      violations.push(new Violation(rule, candidate));
    }
    const toRemove = new Set<Violation>();
    firstLoop: for (let i = 0; i < violations.length; i++) {
      const v = violations[i];
      for (let j = i + 1; j < violations.length; j++) {
        const v2 = violations[j];
        if (v.rule.name != v2.rule.name) continue;
        if (
          (v.node.position.lineEnd == v2.node.position.lineEnd &&
            v.node.position.columnEnd == v2.node.position.columnEnd) ||
          v == v2
        ) {
          toRemove.add(v);
          continue firstLoop;
        }
      }
    }
    return violations.filter((e) => !toRemove.has(e));
  }

  public matchAll(rules = ALL_RULES) {
    const output: Violation[] = [];
    for (const rule of rules) {
      try {
        this.match(rule).forEach((e) => output.push(e));
      } catch (error) {
        console.error(`Error while matching rule ${rule.name}`, error);
      }
    }
    return output;
  }
}

function getPreviousAndNextParentNodes(
  node: AbstractNode<AllDockerNodes>,
  beforeNode: boolean,
  inScript: boolean
): AbstractNode<AllDockerNodes>[] {
  const STOPPER = inScript ? "BASH-SCRIPT" : "DOCKER-FILE";

  const candidates: AbstractNode<AllDockerNodes>[] = [];

  let current = node.parent;
  let previous = node;
  while (current != null) {
    if (current.children.length > 1) {
      const parentIndex = current.children.indexOf(previous as any);
      current.children
        .filter((_, i) => (beforeNode ? i < parentIndex : i > parentIndex))
        .forEach((node) => candidates.push(node));
    }
    if (current.type == STOPPER) break;
    previous = current;
    current = current.parent;
  }
  return candidates;
}
