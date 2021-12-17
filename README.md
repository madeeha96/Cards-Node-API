# Deck of Cards Node API

## Description
This project is a Node API made with Express and MongoDB database to represent a manipulation of a deck of cards.

## Getting Started and Installing
These instructions will help you running on your local machine for development and testing purposes.

* First Git clone the repo into your computer
```
git clone https://github.com/madeeha96/Cards-Node-API
```
* Open your terminal
```
$ cd Cards-Node-API
$ docker-compose up
```
* This should install all the dependencies. Once done
* Run 
``` 
* to test the api response use POSTMAN or any other tool
* open (http://localhost:3333)  
```
## Project Decisions
Used Atlas MongoDB Cloud to avoid database configuration
Used in src/models/Constants.ts two fixed arrays of full and short decks to facilitated the creation of deck cards


## Implementation Plan 
1. Structure deck schema as define in assignment `models/Deck.ts`
2. Define constants for SHORT AND FULL decks.
3. Define ts rules in tsconfig file and interfaces for `Cards and Deck`.
4. Written logic of apis functionality in controller folder.
5. App can be further extended in defining routes in `routes` folder and their business login in `controller` folder with more models define in `models` folder
6. `Server.ts` file connects our app to mongo image defined in our `docker-compose.yml` file and listen to port `3333`

### Enhancements (Nice to have)
7. Unit tests for each api and business logic function
9. Integration testing 
10. Add mongo db cluster instead of local db
11. Add nodemon as dev dependency 
12. Add docker health check api 
13. Error logging can be done on BE api. Incase of any downtime, error can be logged into any analytics tool. (ENHANCEMENT)
