FROM node:20-alpine

WORKDIR /app

COPY package*.json ./

ENV HUSKY=0

RUN npm install --production

COPY . .

RUN npm run build

ENV NODE_ENV=production
ENV PORT=8080

EXPOSE 8080

CMD ["node", ".next/standalone/server.js"]