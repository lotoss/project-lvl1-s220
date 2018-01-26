install:
	npm install

start:
	npm run babel-node -- src/bin/brain-balance.js

publish:
	npm publish --access=public

lint:
	npm run eslint .
