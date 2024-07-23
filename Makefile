# Установка зависимостей
install:
	@echo "Installing dependencies..."
	npm install

# Сборка проекта
build:
	@echo "Building the project..."
	npm run build

# Запуск в режиме разработки
start:
	@echo "Starting development server..."
	npm run dev

# Запуск тестов
test:
	@echo "Running tests..."
	npm test

# Очистка сборки
clean:
	@echo "Cleaning build..."
	rm -rf build
