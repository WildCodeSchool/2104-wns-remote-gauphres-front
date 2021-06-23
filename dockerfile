FROM node:alpine

RUN mkdir /app
WORKDIR /app

COPY package*.json ./
COPY yarn.lock ./

RUN npm i

COPY . ./

CMD [ "npm", "run", "start" ]