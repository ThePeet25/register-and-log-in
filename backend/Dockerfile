from node:20

workdir /app

copy package.json ./

run npm install

copy . .

expose 3001

cmd ["node","server.js"]