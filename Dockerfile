FROM node:20-alpine

WORKDIR /app

COPY /package.json .


COPY /public ./public
COPY /src ./src
COPY /assets ./assets

RUN npm install

EXPOSE 3000

CMD ["npm", "start"]