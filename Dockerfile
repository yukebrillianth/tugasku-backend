FROM node:alpine

RUN mkdir -p /usr/src/main-app && chown -R node:node /usr/src/main-app

WORKDIR /usr/src/main-app

COPY package*.json ./

RUN npm install

COPY --chown=node:node . .

USER node

EXPOSE 3000
CMD [ "npm", "run", "prod" ]