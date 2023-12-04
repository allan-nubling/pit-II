FROM node:18-alpine AS build

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install

COPY . .

RUN yarn build

FROM node:18-alpine AS server

WORKDIR /app

COPY --from=build /app/package.json .
COPY --from=build /app/yarn.lock .
COPY --from=build /app/next.config.js .
COPY --from=build /app/public ./public
COPY --from=build /app/.next/standalone ./
COPY --from=build /app/.next/static ./.next/static

RUN  chown -R node:node /app 

USER node

ENV NODE_ENV=production \
    PORT=3001

EXPOSE 3001

CMD ["node", "server.js"]