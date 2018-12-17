# My-Recipe
 App Allow user to create his own recipe and see all recipes created .
 
 # User journey :
   - As a user I want to create My own ricipe .
  - As a user I want to see all recipes .
  - As a user I want to see the details of the recipes .
 

# Website Link:[My Recipe]
# Architecture :
- App Architecture 
- file Structure 
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
  
 
# How to run our site on your machine?
- git clone this repo **(https://github.com/FACK1/My-Recipe.git)**
- Open your **command line**.
- Put in terminal : **npm install** .
- create database **CREATE DATABASE <database name here>; **
- create uesrname and password **CREATE USER <desired username to connect to database>;**
- grant prinileges **GRANT ALL PRIVILEGES ON DATABASE <database name here> TO <desired username entered previously>;**
- make config.env file and put **DATABASE_URL= postgres://uesrname:password@localhost:5432/dbname**
- Put in terminal : **node database/db_build.js**.
- Then put in terminal : **npm run dev**  to run the server.
- Open your browser and put in terminal: **localhost:3000**.

# Test coverage


# CI Test

# Team_Member:
  - Mutaz Abdulah
  - Mohammad Al Sharif
  - Razan Tayem
  - Sama' Amro
