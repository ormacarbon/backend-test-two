#!/bin/bash

PROJECT_NAME="OrmaCarbon"

sonar-scanner \
  -Dsonar.projectName=$PROJECT_NAME \
  -Dsonar.projectKey=$PROJECT_NAME \
  -Dsonar.sources=. \
  -Dsonar.host.url=http://0.0.0.0:9090 \
  -Dsonar.login=$ORMA-CARBON-TOKEN
