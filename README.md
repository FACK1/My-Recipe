# My-Recipe
An App Allow user to see all recipes and can create his own recipe.
 
 # User journey :
 *As a user I want to...*
 
> See all recipes

> See all recipes

> Create My own recipe

 
# Website Link:[My Recipe](https://fack1-recipes.herokuapp.com/)


# Architecture :

- App Architecture 

![a](https://user-images.githubusercontent.com/35188117/50219886-442a1900-0399-11e9-8caa-c55815db257a.png)

- file Structure 

```
  - public 
      |__ dom.js
      |__style.css

- src 
      |__ database
                |_db_build.js
                |_db_connection.js
                |_db_bulid.sql
      |__queries
               |_get.js
               |_set.js
                      
      |__ views
              |_layout
                  |_main.hbs
              |_partials
              |_home.hbs
              |_recipe.hbs
      |__app.js
      |__server.js
      |__test
              |_db_test.js
              |_test.js
- .gitignore
  ```
 
# Schema database
![screenshot from 2018-12-19 19-23-31](https://user-images.githubusercontent.com/41734542/50236697-c3ccdd80-03c3-11e9-8e27-b9fe0e4edfcd.png)

# How to run our site on your machine?
- git clone this repo **(https://github.com/FACK1/My-Recipe.git)**
- Open your **command line**.
- Put in terminal : **npm install** .
- create database **CREATE DATABASE <database name here>; **
- create uesrname and password **CREATE USER <username> with password <password>;**
- grant prinileges **GRANT ALL PRIVILEGES ON DATABASE <database name here> TO <desired username entered previously>;**
- make config.env file and put **DATABASE_URL= postgres://user:password@localhost:5432/dbname**
- Put in terminal : **node database/db_build.js**.
- Then put in terminal : **npm run dev** to run the server.
- Open your browser and put in terminal: **localhost:3000**.

# Team_Member:
  - Al Mutaz BeAllah 
  - Mohammad Al Sharif
  - Razan Tayem
  - Sama' Amro
