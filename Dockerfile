FROM node:16.13-alpine

WORKDIR /app

COPY . .

RUN npm install yarn
RUN rm -rf package-lock.json
RUN yarn install

CMD ["yarn", "start"]

EXPOSE 5000
