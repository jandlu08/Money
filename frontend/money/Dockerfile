# stage 1
FROM node:current-alpine3.13 AS builder


WORKDIR '/opt/web'
COPY frontend/money/package.json frontend/money/package-lock.json ./
RUN npm install

ENV PATH="./node_modules/.bin:$PATH"

COPY frontend/money ./
RUN ng build --prod

# stage 2
FROM nginx:stable-alpine
COPY frontend/money/nginx.config /etc/nginx/conf.d/default.conf
COPY --from=builder /opt/web/dist/money /usr/share/nginx/html
