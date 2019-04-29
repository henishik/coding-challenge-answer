# Answer : Example Full-Stack Challenge

This repository is an answer to a given example full-stack challenge which consists of both UI app and server api app.

## UPDATE (29.04.19)

Here three things to be changed based on initial feedbacks from Mr.J.

### 1. General Requirements

Fixed some misunderstanding on general acceptance criterias.

* `RESOLVED` report should not be rendered on UI
* PUT args should not include `report id`

### 2. Unit-Tests

Added missing unit-tests structure in both server and UI.

**Server**

* [Tests on API views](./server/app/report/tests.py)
* [Coverage Sample](./docs/res/coverage_matrix_server.png)

**UI**

* [Tests on Actions](./ui/src/app/test/action.test.js)
* [Tests on Reducers](./ui/src/app/test/reducer.test.js)
* [Coverage Sample](./docs/res/coverage_matrix_ui.png)

### 3. General Code Cleaning

Cleaned-up source-codes by deleting unnecessary comments and tidying-up project structure.

## NPM commands

Some commands available via NPM to help druing developments [ui package.json](./ui/package.json)

**UI**

* `npm run start`: start local dev server
* `npm run test`: run jest unit test with coverage generation
* `npm run htmlcov`: open coverage reports on browser

## How to run

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
$ npm run start
```

## Directory Structure

* [UI](./docs/res/tree-ui.txt)
* [Server](./docs/res/tree-server.txt)

## Additional Tech-Notes

* [Additional Reference](./docs/additional-tech-note)
