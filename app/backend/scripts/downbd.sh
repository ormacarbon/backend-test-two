#!/bin/bash

echo "Excluindo o db..."


cd migrations
migrate-mongo down