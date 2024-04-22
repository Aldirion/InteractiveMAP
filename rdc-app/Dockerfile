#build stage
FROM node:20.12-alpine as build_stage
WORKDIR /app
COPY ./package*.json .
RUN npm install
COPY . .
RUN npm run build

#production stage
FROM nginx:stable-alpine as production_stage
COPY --from=build_stage /app/dist /usr/share/nginx/html
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]