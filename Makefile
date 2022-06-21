include .env

.PHONY: up

up:
	docker-compose up -d --force-recreate --build

.PHONY: down

down:
	docker-compose down

.PHONY: logs

logs:
	docker-compose logs -f