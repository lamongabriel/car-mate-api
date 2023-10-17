FROM node:18

WORKDIR /usr/app

ENV NODE_ENV production

COPY package.json .

RUN npm install

COPY . .

EXPOSE 3333

CMD ["npm", "run", "dev"]