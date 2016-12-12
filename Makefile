MODULES=node_modules/.bin

build-web:
	cd webclient && $(MODULES)/webpack

publish-web: build-web
	cp -R webclient/dist/* app/resources/public
	cp webclient/index.html app/resources/public
	cp webclient/app/orders-again.css app/resources/public

build-app:
	cd app && lein uberjar

run: publish-web
	cd app && lein run
