FROM node:18-alpine AS build

WORKDIR /app

COPY package.json bun.lockb yarn.lock ./

RUN yarn install

COPY . .

RUN yarn build

FROM nginx:alpine AS server

WORKDIR /usr/share/nginx/html/

COPY --from=build /app/out ./

EXPOSE 80

CMD [ "nginx", "-g", "daemon off;"]