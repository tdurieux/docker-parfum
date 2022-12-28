# hello
FROM ubuntu:alpine@123
ExposE 8080 8080/tcp
USER daemon
ENV key=value \
    key2=value2

    RUN ls *
CMD ls .
# 7000: intra-node communication
# 7001: TLS intra-node communication
# 7199: JMX
# 9042: CQL
# 9160: thrift service
ENTRYPOINT [ "executable" ]
CMD [ "executable" ]