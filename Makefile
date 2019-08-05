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
	gitbook serve --port 3502

## build: build the book to static 
.PHONY: build
build:
	gitbook build

## publish: commit and publish to gh-pages
publish:
	@echo "[1] >>> Commit Current branch : $(workBranch)"
	@git add .
	-@git commit -m "Ready to publish"
	-@git push

	@echo "[2] >>> switch to gh-pages branch and clean ..."
	@git checkout gh-pages
	@git clean -df
	@rm -rf *~

	@echo "[3] >>> copy generated static files..."
	cp -r _book/* .

	@echo "[4] >>> Publish ..."
	@git add .
	-@git commit -m "Publish book"
	-@git push -u origin gh-pages
	
	@echo "[5] >>> Switch back to $(workBranch)"
	@git checkout $(workBranch)

	@echo "[6] >>> Done!"
