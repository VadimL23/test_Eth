FROM node:16.16

WORKDIR /app

COPY ./app/package*.json ./

RUN npm install

COPY ./app ./app

COPY ./dist ./dist

CMD ["npm", "run", "start:dev"]