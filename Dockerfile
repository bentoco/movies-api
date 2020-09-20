FROM node:12

RUN npm install -g nodemon

WORKDIR /usr/src/app

COPY package.json ./

RUN npm install && mv /usr/src/app/node_modules /node_modules

COPY . .

EXPOSE 3000

CMD [ "npm", "start"]
