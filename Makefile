workBranch := $(shell git symbolic-ref --short -q HEAD)

main:
	@echo "Usage: make"
	@echo ""
	@echo "    build    ......  build the book. Must build before publish"
	@echo "    publish  ......  publish built out book to gh-pages"

build:
	gitbook build

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
