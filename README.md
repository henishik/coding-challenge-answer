# Answer : Example Full-Stack Challenge

This repository is an answer to a given example full-stack challenge which consists of both UI app and server api app.

## UPDATE (29.04.19)

Here three things to be changed based on initial feedbacks from Mr.Joseph.

### 1. General Requirements

### 2. Unit-Tests

**Server**

* Find all of [test cases in server side](./server/app/report/tests.py)

<img src="./docs/res/coverage_matrix_server.png" width=300>

**UI**

* Find all of [test cases in UI side](./ui/src/app/test/)

<img src="./docs/res/coverage_matrix_ui.png" width=300>

### 3. General Code Cleaning

## NPM commands

There are various commands available via NPM for use during development and to create a new release via [ui package.json](./package.json)

**UI**

* `npm run start`: start local dev server
* `npm run test`: run jest unit test with coverage generation
* `npm run htmlcov`: open coverage reports on browser

## how to run

**Pre Requirements**

* latest `node` and `npm` is installed properly
* `docker` is installed properly

**Process**

1. Clone repository `git clone git@github.com:tatsuya-iskw/coding-challenge-answer.git`

2. Build docker image and run server app on a docker

```
$ cd ./coding-challenge-answer/server
$ docker-compose build --no-cache
$ docker-compose up
```

3. Install dependencies and run ui app on a local node dev server

```
$ cd ./coding-challenge-answer/ui
$ npm install
$ node bin/dev-server
$ open http://localhost:9911
```

## Tech-Stacks Overview

**UI**

* `ECMASCript` for basic logics
* `React` for view implementation
* `Redux` for app state(Model/Controller) management

**Server**

* `Python/Django` for a baseline web-framework
* `Sqlite` for a light-weight data persistent
* `Nginx/uWSGI` for a quick web server

## Directory Structure

* [UI](./docs/res/tree-ui.txt)
* [Server](./docs/res/tree-server.txt)


## Notes

* Used personal minimum boiler-plate project to bootstrap fundamental structure in both side
* In general, focus on functional implementation in a give time, therefoere some factors are ignored such as:
  * No usage on css framework in ui app (such as material-ui)
  * Business logics in server are built by pure django functions (No Django REST-Framework)
  * Turn off general CROS check functions in server side
  * Simplified a data structure based on a give data structure

## Things Noticed (After Notes on 29.04.19)

* ImmutableJS for reducer logic handling
* react-saga for http request handling (also makes unit-test easier)