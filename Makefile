workBranch := $(shell git symbolic-ref --short -q HEAD)


.PHONY: help
all: help
help: Makefile
	@echo
	@echo " Choose a command:"
	@echo
	@sed -n 's/^##//p' $< | column -t -s ':' |  sed -e 's/^//'
	@echo

## serve: start a static server locally
.PHONY: serve
serve:
	npm run docs:dev

## build: build the book to static 
.PHONY: build
build:
	npm run docs:build

## publish: commit and publish to gh-pages
publish: