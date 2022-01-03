FROM node:alpine

RUN mkdir -p /usr/src/main-app && chown -R node:node /usr/src/main-app

WORKDIR /usr/src/node-app

USER node

RUN npm install

COPY --chown=node:node . .

EXPOSE 3000