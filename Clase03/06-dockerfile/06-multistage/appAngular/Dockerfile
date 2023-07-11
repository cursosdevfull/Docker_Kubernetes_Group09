FROM node:alpine3.16 as builder

WORKDIR /build

COPY package.json ./

RUN npm install

COPY . .

RUN npm run build

FROM nginx:alpine

COPY --from=builder /build/dist/app-angular /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]