FROM node:24.13.0-alpine AS build

WORKDIR /workspace

COPY package*.json* .

RUN npm ci

COPY . .

COPY ./default.conf /etc/nginx/conf.d/default.conf

RUN npm run build


FROM nginx:1.28.2-alpine

WORKDIR /user/share/nginx/html

COPY --from=build /workspace/dist .

RUN rm /etc/nginx/conf.d/default.conf

# COPY ./default.conf /etc/nginx/conf.d/default.conf

# docker build -t frontend .
# docker run --name frontend -p 8181:80 --rm frontend