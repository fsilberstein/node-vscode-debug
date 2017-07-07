.PHONY: install
install:
	npm install

.PHONY: build
build:
	npm run build

.PHONY: lint
lint:
	npm run lint

.PHONY: test
test:
	npm test