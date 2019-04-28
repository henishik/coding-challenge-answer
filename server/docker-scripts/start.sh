#!/bin/bash

/docker-scripts/django-migrate.sh
/docker-scripts/initialize-data.sh
exec supervisord -n