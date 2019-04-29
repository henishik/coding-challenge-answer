## Tech-Stack Overview

**UI**

* `ECMASCript` for basic logics
* `React` for view implementation
* `Redux` for app state(Model/Controller) management

**Server**

* `Python/Django` for a baseline web-framework
* `Sqlite` for a light-weight data persistent
* `Nginx/uWSGI` for a quick web server


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