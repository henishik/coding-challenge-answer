#!/bin/bash

# Run django migrate command before app runs.
/docker-scripts/django-migrate.sh
# Run processes through supervisor.
exec supervisord -n