`put travis badge here`

 LAB 06: HTTP and REST
========================================================
  I'm stuck on the syntax of this get request

  http GET :3000/products?category=aid will return just the records with a category of 'aid', but none of the things i've tried have made the superagent get request work.

  ejs is like if microsoft created react


  speaking of microsoft, github is currently having issues that are interfering with heroku integration as of 4:30PM Sun, so hopefully I will update this before midnight with Heroku.  If this segment is still in here, github was still down as of deadline.

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

Web server for front end of store app, implemented with express as its router and ejs as its view engine

Sample data consists of Fallout 4 items.

It has 3 functions corresponding to its 3 GET routes, each expecting a request and a response, and rendering an ejs page to the index (main).

 - /
    - runs the homePage function
    - renders a generic landing page for the app with a header, main, and footer component
      - main component pulls in content by dark ejs magic

- /categories
  - runs the categoryView function
  - renders a page to the main view listing the categories returned from the database
    - each list item generates a link to a product view page listing all products matching that category

- /categories/:name
  - runs the productsView function, which expects a third parameter, 'category', but I'm not sure if I'm using it correctly, as the function doesn't work.
  - WERE it to work correctly, it would render a page with information about each item in the selected category.


## RESTy

can be started with `npm run dev`

## Testing

Going to have to get back to this on a resubmit, I need to get on to lab 7 before deadline

TODO:

- webserver
  [] Use `supertest` to assert that the server responds to the routes
  [] Mock out the API calls in the web server test
