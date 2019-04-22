FROM ubuntu:16.04
MAINTAINER Dockerfiles

RUN apt-get update && apt-get install -y \
	git \
	python \
	python-dev \
	python-setuptools \
	python-pip \
	nginx \
	vim \
	supervisor \
	sqlite3 \
	libmysqlclient-dev \
  && rm -rf /var/lib/apt/lists/*

RUN pip install uwsgi
RUN echo "daemon off;" >> /etc/nginx/nginx.conf
COPY ./conf/nginx-app.conf /etc/nginx/sites-available/default
COPY ./conf/supervisor-app.conf /etc/supervisor/conf.d/

COPY docker-scripts/ /docker-scripts/
RUN chmod 755 /docker-scripts/*.sh

COPY app/requirements.txt /home/docker/code/app/
RUN pip install -r /home/docker/code/app/requirements.txt

COPY . /home/docker/code/

EXPOSE 80
CMD ["/docker-scripts/start.sh"]
