build:
	docker build -t portfolio .
run:
	docker run -p 80:80 -v $(CURDIR):/var/www/html:rw --env-file .env -d --name portfolio portfolio
start:
	docker start portfolio
stop:
	docker stop portfolio