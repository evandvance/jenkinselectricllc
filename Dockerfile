FROM node:21-alpine as base
WORKDIR /next
COPY package*.json .
EXPOSE 3000

FROM base as prod
ENV NODE_ENV=production

RUN addgroup next && adduser -S -G next next

RUN chown -R next:next .

USER next

RUN npm ci

COPY . .

RUN npx prisma generate
RUN npm run build

CMD [ "npm", "run", "start" ]


FROM base as dev

ENV NODE_ENV=development
RUN npm install

COPY . .

RUN npx prisma generate

CMD [ "npm", "run", "docker-dev" ]