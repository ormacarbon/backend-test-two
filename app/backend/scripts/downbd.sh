#!/bin/bash

echo "Excluindo o db..."

npm install -g migrate-mongo

cd migrations
migrate-mongo down