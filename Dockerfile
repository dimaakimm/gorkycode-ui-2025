# Используем официальный образ Python 3.10 как базовый
FROM python:3.10-slim

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем файл requirements.txt в контейнер
COPY requirements.txt .

# Устанавливаем зависимости из файла requirements.txt
RUN pip install --no-cache-dir -r requirements.txt

# Копируем весь проект в контейнер
COPY . .

# Указываем переменную окружения, чтобы FastAPI использовал Uvicorn как сервер
ENV UVICORN_CMD="uvicorn main:app --host 0.0.0.0 --port 8000 --reload"

# Экспонируем порт 8000 для доступа к приложению
EXPOSE 8000

# Команда для запуска приложения
CMD ["sh", "-c", "$UVICORN_CMD"]
