#!/bin/bash

# Run django migrate command before app runs.
/docker-scripts/django-migrate.sh
# Initialize data.
/docker-scripts/initialize-data.sh
# Run processes through supervisor.
exec supervisord -n