# Build React app
FROM node:12.2.0-alpine as builder

WORKDIR /app

COPY package.json yarn.lock /app/

RUN yarn install

COPY . /app

RUN yarn run build

# Host built static files
FROM nginx:1.17.6-alpine

COPY ./docker/nginx.conf /etc/nginx/nginx.conf
COPY --from=builder /app/build /usr/share/nginx/html
