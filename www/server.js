'use strict';

const superagent = require('superagent');
const express = require('express');

const app = express();

const PORT = process.env.PORT || 8080;
const API = process.env.API_URL || 'http://localhost:3000';


//  set up ejs as our template engine:

app.set('view engine', 'ejs');


//  set the public folder for static assets:
app.use( express.static('./public') );

app.get('/', homePage);
app.get('/products/', productsView);
app.get('/categories/', categoriesView);

function homePage( req, res ){
  res.render('index', {page:'./pages/home',title:'Our Site: Home'});
}

function productsView(req, res){
  superagent.get(`${API}/products`)
    .then( data => {
      res.render('index', {products:data.body, page:'./pages/products', title:'Products page'});
    })
    .catch(err => {console.log('errrrrr:     ', err);
    });
}

function categoriesView(req, res){
  superagent.get(`${API}/categories`)
    .then( data => {
      res.render('index', {categories:data.body, page:'./pages/categories', title:'Categories page'});
    })
    .catch(err => {
      console.error(err);
    });
}

// function teamsPage(request,response) {
//   superagent.get(`${API}/teams`)
//     .then( data => {
//       response.render('index', {teams:data.body, page:'./pages/teams', title:'Our Site: Teams'});

//     })
//     .catch( error => console.error(error) );

// }

app.listen(PORT, () => {
  console.log(`listening on PORT ${PORT}`);
});