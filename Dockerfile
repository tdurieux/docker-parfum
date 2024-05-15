FROM node:16-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install
COPY build/ .

# Start the application
ENTRYPOINT [ "node", "cli/index.js" ]
