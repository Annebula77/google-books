# Определяем базовый образ с Node.js
FROM node:14

# Устанавливаем рабочую директорию внутри образа
WORKDIR /usr/src/app

# Копируем файлы package.json и package-lock.json
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем все файлы из локальной папки в рабочую директорию образа
COPY . .

# Собираем приложение
RUN npm run build

# Устанавливаем глобально пакет serve для запуска собранного приложения
RUN npm install -g serve

# Запускаем приложение через пакет serve
CMD ["serve", "-s", "build"]

# Открываем порт 5000
EXPOSE 5000
