FROM node:current

COPY package.json .

RUN npm i

COPY . .

CMD [ "npm", "start" ]
