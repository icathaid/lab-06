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
// app.get('/teams/', teamsPage);


function homePage( req, res ){
  res.render('site', {page:'./pages/home',title:'Our Site: Home'});
}

function productsView(req, res){
  superagent.get(`${API}/products`)
    .then(data => {
      console.log(data.body);
      res.render('site', {products:'data.body',page:'./pages/products',title:'Products page'});
    })
    .catch(err => {console.log('errrrrr:     ', err);
    });
}

app.listen(PORT, () => {
  console.log(`listening on PORT ${PORT}`);
});