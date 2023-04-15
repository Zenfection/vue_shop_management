FROM node:alpine

WORKDIR /app

COPY package.json pnpm-lock.yaml ./

RUN npm install -g pnpm

RUN pnpm i

COPY . .

EXPOSE 3000

CMD ["pnpm", "dev"]