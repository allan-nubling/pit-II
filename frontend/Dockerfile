FROM node:18-alpine AS base

WORKDIR /app

RUN  chown -R node:node /app 

USER node

COPY package.json bun.lockb yarn.lock ./

RUN yarn install

FROM base AS build

COPY . .

RUN yarn build

FROM base AS final

COPY --from=build /app/.next ./.next
COPY --from=build /app/public ./public

EXPOSE 3001

CMD ["yarn", "start"]