FROM node:alpine

WORKDIR /app

COPY package.json pnpm-lock.yaml ./

RUN npm install -g pnpm

RUN pnpm i

COPY . .

EXPOSE 8080

CMD ["pnpm", "dev"]