# The project proposal

### The project are based in a place  in which it brings together the breweries with interating of users. The users can to assess  breweries and   to disclose cupons between lovers the beer.

### For dont scape of proposal, the principal are the Breweries, where can find, find your menus, recevied your informations, how website, your location.

## Technologies

Technologies chosen for the project

![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white) 
![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white)
![Jest](https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens)
![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)


Have libs as natural (used for tokenize words and storage)

</br>






## Using Docker (Recommended)
<br />


```bash
docker compose up -d
```

<br/>

## Documentation routes

The project use swagger for document endpoins, you can access <strong>/docs</strong> for show the endpoints,
just run the project and access  <strong>/docs</strong> 

```
http://localhost:3000/docs /// default
```


## Instalation


Use NPM for install dependences

```bash
$ npm install
```
<br/>


### File <strong>.env</strong> 



Feel free to change the environment variables to your liking. But, the settings are already preset.
Know that the <strong>PORT</strong> default  are <strong>3000</strong>.
With dependecies installed. 
Neccesary have a database mongoDB running in your machine or through container.
If you choose the container, feel free to run the command

```npm
$ docker run -d -p 27017:27017 mongo
```
## Collection

You can find db.json file and collection postman in directory data

```
├── data/ 
├────── db.json 
├────── collection_postman.json  

```




















