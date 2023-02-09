# **API Fix**

>## SITUAÇÃO-PROBLEMA

>Você acabou de ser contratado para uma vaga de desenvolvedor backend de uma empresa que revende cervejas do mundo inteiro. O desenvolvedor anterior corrompeu completamente o banco de dados e a API anterior e sobrou apenas um arquivo .JSON com todas as informações do banco. Seu líder confiou a tarefa de recriar a API e o banco de dados a você.

>Neste teste, você deverá criar uma API com endpoints a serem consumidos via REST e um banco de dados, utilizando os dados fornecidos no arquivo. ````db.json````.

---------------------------------------------------------------------

## Instructions

1. Execute [db.sql](db.sql) on a MySQL DB
    - Note that DB connection file is set to default DB configuration, them being:
        ```
        HOST: localhost
        USER: root
        PASSWORD: 
        PORT: 3306
        ```
        If this is not your DB configuration, please change it at [Database.go](Config/Database.go)
2. Execute `go run .` at root
3. (Optional) You can access `localhost:8080/beers` as `POST`, sending the content at  [db.json](db.json) to populate the database 

# Endpoints

## List all beers

`GET`

    /beers

### Response

    [
        {
            "id":1,
            "abv":1.918797384901016,
            "address":"1 Test Street",
            "category":"Test one",
            "city":"Test One City",
            "coordinates":[11.1111,-11.1111],
            "country":"Test One Country",
            "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ultricies id tellus quis condimentum. In pellentesque nisl leo, sit amet consectetur dui maximus quis. Fusce et condimentum nisl, scelerisque venenatis arcu. Donec id ornare ligula. Vestibulum pharetra vehicula volutpat. Aenean sit amet elit ut ante consequat sodales. Nam quis vulputate leo. Suspendisse vel sollicitudin libero, eget aliquam sapien. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere.",
            "ibu":111,
            "name":"Test one name",
            "state":"Test One",
            "website":"http://www.testone.com"
        }
        {
            "id":2,
            "abv":2.918797384901016,
            "address":"2 Test Street",
            "category":"Test two",
            "city":"Test Two City",
            "coordinates":[22.2222,-22.2222],
            "country":"Test Two Country",
            "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tempor eu elit at accumsan. Phasellus vitae accumsan justo, eleifend consectetur dui. Sed eu lacinia ante, a pulvinar urna. Nam quam magna, finibus id posuere ut, pretium non nulla. Cras rutrum ex vitae pellentesque pretium. Pellentesque ac leo eget enim molestie dignissim. Aenean at luctus dui, vel mattis magna. Maecenas vel quam hendrerit, tristique elit nec, malesuada enim. Donec suscipit.",
            "ibu":22,
            "name":"Test two name",
            "state":"Test Two",
            "website":"http://www.testtwo.net"
        }
        {...}
    ]

## List a single beer

`GET`

    /beer/{id}

### Response

    {
        "id":1,
        "abv":1.918797384901016,
        "address":"1 Test Street",
        "category":"Test one",
        "city":"Test One City",
        "coordinates":[11.1111,-11.1111],
        "country":"Test One Country",
        "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ultricies id tellus quis condimentum. In pellentesque nisl leo, sit amet consectetur dui maximus quis. Fusce et condimentum nisl, scelerisque venenatis arcu. Donec id ornare ligula. Vestibulum pharetra vehicula volutpat. Aenean sit amet elit ut ante consequat sodales. Nam quis vulputate leo. Suspendisse vel sollicitudin libero, eget aliquam sapien. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere.",
        "ibu":111,
        "name":"Test one name",
        "state":"Test One",
        "website":"http://www.testone.com"
    }

## Create a new beer

`POST`

    /beer

### Response

    {
        "id":3,
        "abv":3.918797384901016,
        "address":"3 Test Street",
        "category":"Test three",
        "city":"Test Three City",
        "coordinates":[33.3333,-33.3333],
        "country":"Test Three Country",
        "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ac pellentesque nunc, eget blandit felis. Pellentesque congue libero urna, a fermentum enim pretium ullamcorper. Sed quis placerat justo, ac volutpat odio. Pellentesque luctus turpis maximus ipsum imperdiet sollicitudin. Aliquam nunc odio, scelerisque non felis ut, feugiat lacinia massa. Fusce eleifend.",
        "ibu":33,
        "name":"Test three name",
        "state":"Test Three",
        "website":"http://www.testthree.com.br"
    }

## Create new beers (JSON Array)

`POST`

    /beers

### Response

    [
        {
            "id":1,
            "abv":1.918797384901016,
            "address":"1 Test Street",
            "category":"Test one",
            "city":"Test One City",
            "coordinates":[11.1111,-11.1111],
            "country":"Test One Country",
            "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ultricies id tellus quis condimentum. In pellentesque nisl leo, sit amet consectetur dui maximus quis. Fusce et condimentum nisl, scelerisque venenatis arcu. Donec id ornare ligula. Vestibulum pharetra vehicula volutpat. Aenean sit amet elit ut ante consequat sodales. Nam quis vulputate leo. Suspendisse vel sollicitudin libero, eget aliquam sapien. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere.",
            "ibu":111,
            "name":"Test one name",
            "state":"Test One",
            "website":"http://www.testone.com"
        }
        {
            "id":2,
            "abv":2.918797384901016,
            "address":"2 Test Street",
            "category":"Test two",
            "city":"Test Two City",
            "coordinates":[22.2222,-22.2222],
            "country":"Test Two Country",
            "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tempor eu elit at accumsan. Phasellus vitae accumsan justo, eleifend consectetur dui. Sed eu lacinia ante, a pulvinar urna. Nam quam magna, finibus id posuere ut, pretium non nulla. Cras rutrum ex vitae pellentesque pretium. Pellentesque ac leo eget enim molestie dignissim. Aenean at luctus dui, vel mattis magna. Maecenas vel quam hendrerit, tristique elit nec, malesuada enim. Donec suscipit.",
            "ibu":22,
            "name":"Test two name",
            "state":"Test Two",
            "website":"http://www.testtwo.net"
        }
        {...}
    ]

## Update a beer

`PUT`

    /beer/{id}

### Response

    {
        "id":1,
        "abv":1.918797384901016,
        "address":"1 Test Street",
        "category":"Test one",
        "city":"Test One City",
        "coordinates":[11.1111,11.1111],
        "country":"Test One Country",
        "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam odio ante, scelerisque a metus nec, consectetur pretium mauris. Duis scelerisque ante urna, eu eleifend velit hendrerit sed. Sed pulvinar lorem vitae mauris ultricies, a pellentesque augue molestie. Aenean maximus diam eget nunc porta, eu convallis ex tincidunt. Vivamus eu feugiat.",
        "ibu":111,
        "name":"Test one name",
        "state":"Test One",
        "website":"http://www.testone.com"
    }

## Delete a beer

`DELETE`

    /beer/{id}

### Response

    {
        "response": "Beer deleted"
    }