'use strict';

const superagent = require('superagent');
const express = require('express');

const app = express();

const PORT = process.env.PORT || 8080;
const API = process.env.API_URL || 'http://localhost:3000';

app.set('view engine', 'ejs');

app.use( express.static('./public') );

app.get('/', homePage);
app.get('/categories/', categoriesView);
app.get('/categories/:name', productsView);

function homePage( req, res ){
  res.render('index', {page:'./pages/home',title:'Our Site: Home'});
}

function productsView(req, res){
  let type = req.url.split(':');
  superagent.get(`${API}/products`)
    .query({category:type[(type.length-1)]})
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

app.listen(PORT, () => {
  console.log(`listening on PORT ${PORT}`);
});