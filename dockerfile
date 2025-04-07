FROM node:latest AS builder

WORKDIR /app

COPY package*.json ./

RUN npm install -g npm@latest && npm install -g pnpm

RUN pnpm install
COPY . .

RUN pnpm build

FROM node:latest

WORKDIR /app

COPY --from=builder /app ./

EXPOSE 3000

CMD ["npm", "run", "dev"]
