# Build frontend
FROM node:22-alpine AS builder-front

WORKDIR /app

#COPY ./front/package-lock.json .
#COPY ./front/package.json .
COPY ./front .

RUN npm install


RUN npm run build

CMD ["npm", "run", "start"]

# Backend server
FROM node:22-alpine AS server-back

WORKDIR /app

COPY ./back/package.json .
COPY ./back .

RUN npm install


ENV ADDRESS=0.0.0.0 PORT=8000

# Serveur backend à partir du port 80
CMD ["npm", "start"]

# Serve frontend using Nginx
FROM nginx:1.27-alpine

WORKDIR /root/

COPY ./docker/nginx.conf /etc/nginx/nginx.conf
COPY --from=builder-front /app/dist /usr/share/nginx/html

EXPOSE 8000

CMD ["nginx", "-g", "daemon off;"]
