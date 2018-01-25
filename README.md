# Volunteering
Volunteering@RPI allows students at RPI to find volunteering opprotunites that interest them and have fun while giving back to the community. 

## Important note for /dev branch
The current development of this repo is a MERN stack. 
The structure of this stack is a `server` directory which contains a `client` directory.
**Both of these directories contain `package.json` files.** 
The `package.json` file located in the `server` directory contains the packages required to run the ExpressJS server and connect to the MongoDB database.
The `package.json` file located in the `client` directory contains the packages required to run the ReactJS server, which is then built into a single file for production.

**Always remember which file you are in when doing `npm i --save`!**

## How to start the website on the /dev branch

Run all `npm` commands in the `server` directory.

* `npm run server` - Will only run the server on localhost:5000.

* `npm run client` - Will only run the client on localhost:3000.

* `npm run dev`    - Will run both the client and server on their respective ports. 

Look in the `server` directory `package.json`for definitions of commands. 
