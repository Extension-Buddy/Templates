####################################
# Commands for your extension
####################################
.PHONY: help build copy-background-sdk

URL=https://raw.githubusercontent.com/Extension-Buddy/extension-buddy-sdk/main/dist/extension-buddy-sdk.js
SDK_NAME=extension-buddy-sdk.js
DIST_DIR = dist
EXCLUDE_PATTERNS = --exclude=$(DIST_DIR) --exclude='Makefile' --exclude='.gitignore' --exclude='README.md'
LIB_DIR=scripts/lib

help:
	$(info ${HELP_MESSAGE})
	@exit 0
build: copy-background-sdk
	@echo 'Removing prior build...'
	@rm -rf $(DIST_DIR)/*
	@rm -f latestBuild.zip
	@echo 'Prior build removed!'
	@echo 'Preparing new extension build..'
	@mkdir -p $(DIST_DIR)
	@rsync -av $(EXCLUDE_PATTERNS) ./ $(DIST_DIR)/
	@rm -rf $(DIST_DIR)/$(DIST_DIR)
	@echo 'Zipping up build files for upload...'
	@zip -r -X latestBuild.zip $(DIST_DIR)/*
	@echo 'New extension build ready for upload!'
	@exit 0
copy-background-sdk:
	@echo 'Downloading the extension-buddy-sdk.js for the background script.'
	@mkdir -p $(LIB_DIR)
	@curl -o $(LIB_DIR)/$(SDK_NAME) $(URL)
	@echo '⚠️ NOTE: Extension Buddy SDK had been updated!!'
	@exit 0
define HELP_MESSAGE
	--- Run this command to prepare the build for upload ---
	$ make build
	$ make copy-background-sdk
endef
