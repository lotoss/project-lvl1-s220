install:
	npm install

start:
	npm run babel-node -- src/bin/brain-prime.js

publish:
	npm publish --access=public

lint:
	npm run eslint .
