#!/bin/bash

echo "Iniciando o db com as configuraçoes inicias.."
cd migrations
migrate-mongo up