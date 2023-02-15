FROM mongo:5.0.7
COPY db.json /db.json
CMD mongoimport --host mongodb --db Beers --collection beers --type json --file ./db.json --jsonArray