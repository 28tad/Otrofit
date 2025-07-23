# Этап сборки (с dev-зависимостями)
FROM node:20-alpine AS builder

WORKDIR /app

# Копируем файлы зависимостей
COPY package*.json ./

# Отключаем Husky hooks
ENV HUSKY=0

# Устанавливаем все зависимости (prod + dev) для сборки
RUN npm ci

# Копируем весь проект
COPY . .

# Собираем проект
RUN npm run build

# Удаляем dev-зависимости после сборки
RUN npm prune --production

# Финальный этап (только production)
FROM node:20-alpine

WORKDIR /app

# Копируем всю структуру standalone как есть (включая server.js)
COPY --from=builder /app/.next/standalone ./

# Копируем статику в .next/static внутри standalone
COPY --from=builder /app/.next/static ./.next/static

# Копируем public
COPY --from=builder /app/public ./public

# Копируем node_modules (если нужно, но обычно в standalone уже включены)
COPY --from=builder /app/node_modules ./node_modules

# Копируем package.json и next.config.ts (если нужны для runtime)
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/next.config.ts ./next.config.ts

# Настройки окружения
ENV NODE_ENV=production
ENV PORT=8080

# Экспонируем порт для Timeweb
EXPOSE 8080

# Команда запуска (указываем полный путь к server.js)
CMD ["node", ".next/standalone/server.js"]