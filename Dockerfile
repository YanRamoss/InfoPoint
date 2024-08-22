FROM node:20

WORKDIR /app

COPY package.json package-lock.json ./
RUN node install

COPY . .

RUN npm run build