# Answer : Example Full-Stack Challenge

This repository is an answer to a given example full-stack challenge which consists of both UI app and server api app.

## How to run

**Pre Requirements**

* latest `node` is installed properly
* `docker` is installe properlyd

**Process**

1. Clone repository `git clone git@github.com:tatsuya-iskw/coding-challenge-answer.git`

2. server app

```
$ cd/coding-challenge-ansewr/server
$ docker-compose build --no-cache
$ docker-compose up
```

3. ui app

```
$ cd/coding-challenge-ansewr/ui
$ npm install
$ node bin/dev-server
$ open http://localhost:9911
```

## Tech-Stacks Overview

**UI**

* `ECMASCript6` for basic logic
* `React` for View Implementation
* `Redux` for App State(Model/Controller) management

**Server**

* `Python/Django` for a base-line api framework
* `Sqlite` for a light-weight data persistent
* `Nginx/uWSGI` for a quick web server contained by `docker`

## App Structure

**UI**

```
.
├── bin
│   └── dev-server.js
├── dist
│   └── index.html
├── package-lock.json
├── package.json
├── src
│   ├── app
│   │   ├── action
│   │   │   └── index.js
│   │   ├── component
│   │   │   └── organism
│   │   │       ├── MainScreen.js
│   │   │       └── rootContainer.js
│   │   ├── configureStore.js
│   │   ├── index.html
│   │   ├── index.js
│   │   └── reducers
│   │       └── index.js
│   └── sass
│       ├── component
│       │   └── organism
│       │       ├── mainScreen.scss
│       │       └── rootContainer.scss
│       └── main.scss
└── webpack.config.js

11 directories, 15 files
```

**Server**

```
.
├── Dockerfile
├── app
│   ├── db.sqlite3
│   ├── manage.py
│   ├── project
│   │   ├── __init__.py
│   │   ├── settings.py
│   │   ├── urls.py
│   │   └── wsgi.py
│   ├── report
│   │   ├── __init__.py
│   │   ├── admin.py
│   │   ├── apps.py
│   │   ├── initial_data
│   │   │   ├── __init__.py
│   │   │   ├── is_data_initialized.txt
│   │   │   └── reports.py
│   │   ├── migrations
│   │   │   ├── 0001_initial.py
│   │   │   └── __init__.py
│   │   ├── models.py
│   │   ├── populate_data_from_docker_build.py
│   │   ├── tests.py
│   │   ├── urls.py
│   │   └── views.py
│   └── requirements.txt
├── conf
│   ├── nginx-app.conf
│   └── supervisor-app.conf
├── docker-compose.yml
├── docker-scripts
│   ├── django-migrate.sh
│   ├── initialize-data.sh
│   └── start.sh
├── uwsgi.ini
└── uwsgi_params

7 directories, 29 files
```

## Notes

* Simplified a data structure since I'm not sure some relations
* Since this is a prototype, I used my personal boiler-plate project to bootstrap fundamental structure
* Aimed and focus on functional implementation in a give time, therefoere some factors are ignored such as for examples:
  * no usage on css framework in ui app (such as material-ui)
  * ignored CROS (turn off general CROS functions in server side)
  * no usage on REST framework in server app for business logic serialization, rather pure business logic implementation