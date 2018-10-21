`put travis badge here`

 LAB: HTTP and REST
========================================================
  I'm stuck on the syntax of this get request
  http GET :3000/categories?=aid will return just the records with a category of 'aid', but none of the things i've tried have made the superagent get request work.

  ejs is like if microsoft created react


  

## API Server

can be started with `json-server --id=_id db.json`

API server for a storefront implemented with json-server.  It contains two data models:
  * categories -
    * _id, name, display_name, description
  * products - 
    * _id, category, name, display_name, description
  

- Note: I hardcoded the first few _id values into db.json, but left that field out because json-server assigns it a unique id if none is present anyway, which seemed better (and more efficient) than hardcoding a unique ID into each db record.


## Web Server

can be started with `npm start`

Web server for front end of store app, implemented with express and ejs

  * Static routes and assets are served from the public folder
  * Uses ejs as its view engine
  * Implements site.ejs as a master template that pulls in a partial into the <main> element based on the 'page' being served
  * Has 3 GET routes:
    * /
      - home page
    * /categories
      - lists each category of products in the database (db.json/json-server)
    * /categories:/name
      - should list all of the products in the category clicked on
      - this feature does not work yet, it returns a list of all products regardless of category
  

## RESTy

can be started with `npm run dev`

## Testing

- TODO

###### Testing
**Web Server**

* Use `supertest` to assert that the server responds to the routes
* Mock out the API calls in the web server test


##  Documentation
Include your travis badge at the top of your `README.md` file
In your `README.md`, describe the exported values of each module you have defined. Every function description should include it's airty (expected number of parameters), the expected data for each parameter (data-type and limitations), and it's behavior (for both valid and invalid use). Feel free to add any additional information in your `README.md` that you would like.

