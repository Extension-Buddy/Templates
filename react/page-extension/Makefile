####################################
# Commands for your extension
####################################
.PHONY: help build copy-background-sdk

help:
	$(info ${HELP_MESSAGE})
	@exit 0
build: copy-background-sdk
	@echo 'Removing prior build...'
	@rm -rf dist/*
	@rm -f latestBuild.zip
	@echo 'Prior build removed!'
	@echo 'Preparing new extension build..'
	@export INLINE_RUNTIME_CHUNK=false; \
	export GENERATE_SOURCEMAP=false; \
	npm run build
	@mkdir -p dist
	@cp -r build/* dist
	@echo 'Removing build folder...'
	@rm -rf build
	@echo 'Renaming files...'
	@mv dist/index.html dist/page.html
	@echo 'Zipping up build files for upload...'
	@zip -r -X latestBuild.zip dist/*
	@echo 'New extension build ready for upload!'
	@exit 0
copy-background-sdk:
	@echo 'Copying the extension-buddy-sdk.js for the background script.'
	@if [ -d "node_modules/extension-buddy-sdk" ]; then \
		cp node_modules/extension-buddy-sdk/dist/extension-buddy-sdk.js public/lib;\
	else \
		echo "extension-buddy-sdk package does not exist. Skipping..."; \
		exit 0; \
	fi
define HELP_MESSAGE
	--- Run this command to prepare the build for upload ---
	$ make build
	$ make copy-background-sdk
endef
