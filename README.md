 LAB: HTTP and REST
========================================================
//  I'm stuck on the syntax of this get request
  //  http GET :3000/categories?=aid will return just the records with a category of 'aid', but none of the things i've tried have made the superagent get request work.

  
[]  clean up public folder

[]  onclick method in categories.ejs link to fire off superagent.get of ?name={name}?



## Before you begin
* You'll need to initialize this lab folder as a new node module, install your dependencies, setup your npm script commands, and pull in your config files

## Assignment
###### Requirements
* Implement an API server for a storefront, using json-server
  * Create a sub-folder called `data` with a `db.json` file
  * Start your json-server from within this folder
  * Data models should contain the following fields:
    * `categories`
      * `_id`, `name`, `display_name`, `description`
    * `products`
      * `_id`, `category`, `name`, `display_name`, `description`

* Implement a Web Server with express and ejs
  * Static routes and assets served from the public folder
  * Use 'ejs' as your 'view engine'
  * Implement a `site.ejs` master template that pulls in a partial into the `<main></main>` element based on the 'page' being served
  * Declare 3 get routes:
  * /
    * Home Page
    * Use `pages/index.ejs`
  * /categories
    * Lists each categories and draws a link to a detail page (/category/:name)
    * Use `pages/categories.ejs`
  * /category/:name
    * Lists the products in the category
    * Use `pages/products.ejs`

* Install and fire up RESTy
  * For this lab task, lets just get our REST client up and running
  * Download it from the class repo
  * Install it using `npm install`
  * Start it using `npm run dev`


###### Testing
**Web Server**

* Use `supertest` to assert that the server responds to the routes
* Mock out the API calls in the web server test


##  Documentation
Include your travis badge at the top of your `README.md` file
In your `README.md`, describe the exported values of each module you have defined. Every function description should include it's airty (expected number of parameters), the expected data for each parameter (data-type and limitations), and it's behavior (for both valid and invalid use). Feel free to add any additional information in your `README.md` that you would like.

