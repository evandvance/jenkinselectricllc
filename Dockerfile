FROM node:21-alpine as base
WORKDIR /next
COPY package*.json .
EXPOSE 3000

FROM base as prod
ENV NODE_ENV = prod

RUN addgroup next && adduser -S -G next next

RUN chown -R next:next .

USER next

RUN npm ci

COPY . .

RUN npm run build

CMD [ "npm", "run", "preview" ]


FROM base as dev

ENV NODE_ENV = dev
RUN npm install

COPY . .

CMD [ "npm", "run", "preview" ]