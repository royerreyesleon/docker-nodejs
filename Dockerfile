FROM node:12

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

# CMD ["npm", "src/index.js"]
CMD ["npm", "start"]