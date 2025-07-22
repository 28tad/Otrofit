FROM node:20-alpine AS builder

WORKDIR /app

COPY package*.json ./

ENV HUSKY=0

RUN npm ci

COPY . .

RUN npm run build

RUN npm prune --production

FROM node:20-alpine

WORKDIR /app

COPY --from=builder /app/.next/standalone ./.next/standalone
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/next.config.js ./next.config.js

ENV NODE_ENV=production
ENV PORT=8080

EXPOSE 8080

CMD ["node", ".next/standalone/server.js"]