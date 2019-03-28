# # # Stage 1 build image
FROM node:alpine as build-stage
WORKDIR /app

COPY package*.json /app/
RUN npm install

COPY ./ /app/
RUN npm run build

# # # Stage 2 ngnix proxy configuration
FROM nginx:alpine
COPY --from=build-stage /app/build/ /usr/share/nginx/html
COPY default.conf /etc/nginx/conf.d/default.conf
EXPOSE 5001
# CMD ["nginx", "-g", "daemon off;"]

# stage 2 npm run build locally
# FROM nginx:alpine
# COPY default.conf /etc/nginx/conf.d/default.conf
# COPY ./build /usr/share/nginx/html
# EXPOSE 80
# CMD ["nginx", "-g", "daemon off;"]