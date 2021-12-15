require('dotenv').config();
const express = require('express')
const hbs = require('hbs');


const app = express()
const port = process.env.PORT;



//hanblebars
app.set('view engine', 'hbs');
hbs.registerPartials( __dirname + '/views/partials', function (err) {});

//servir contenido estatico
app.use(express.static('public'));

app.get('/',  (req, res) => {
    res.render('home', {
        nombre: 'Fernando',
        titulo: 'Curso Node'
    });
  })

app.get('/generic', function (req, res) {
    res.render('generic', {
        nombre: 'Fernando',
        titulo: 'Curso Node'
    });
  })
  
  app.get('/elements', function (req, res) {
    res.render('elements', {
        nombre: 'Fernando',
        titulo: 'Curso Node'
    });
  })

  app.get('*', function (req, res) {
    res.sendFile(__dirname + '/public/404.html');
  })
 
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
})