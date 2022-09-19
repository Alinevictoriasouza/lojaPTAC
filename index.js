const express = require('express');
const app = express();
const hbs = require('express-handlebars');
const PORT = process.env.PORT || 3000;
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));

app.engine('hbs', hbs.engine({
  extname: 'hbs',
  defaultLayout: 'main'
}));

app.set('view engine', 'hbs');

app.get('/', (req, res) => {
  res.render('home');
});

app.get('/cad_users', (req, res) => {
  res.render('cad_users');
});

app.get('/exibir_users', (req, res) => {
  res.render('exibir_users');
});

app.get('/editar_users', (req, res) => {
  res.render('editar_users');
});


app.post('/insert_users', (req, res) => {
  console.log(req.body);
})

app.listen(PORT, () => {
  console.log('Servidor rodando em http://localhost:' + PORT);
})