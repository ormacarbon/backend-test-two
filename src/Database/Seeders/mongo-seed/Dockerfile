FROM mongo:5.0.7
COPY db.json /db.json
CMD mongoimport --host mongodb --db BeersEnterprise --collection beers --type json --file ./db.json --jsonArray