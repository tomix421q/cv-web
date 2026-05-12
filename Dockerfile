# 1. Krok: Vytvorenie buildu (stiahne Node.js a spustí tvoj kód)
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# 2. Krok: Nasadenie na ľahučký Nginx (zahodí Node.js a nechá si len hotové HTML)
FROM nginx:alpine
COPY --from=builder /app/out /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]