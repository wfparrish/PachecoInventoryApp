const express = require('express');
// const bodyParser = require('body-parser');
const stackRoutes = require('./routes/api/stacks');
const panelRoutes = require('./routes/api/panels');
const cornerRoutes = require('./routes/api/corners');
const sectorRoutes = require('./routes/api/sectors');
const yardRoutes = require('./routes/api/yards');
const connectDB = require('./config/db');
const { body } = require('express-validator');
const app = express();
// app.use(bodyParser.urlencoded({extended: true}))
// app.use(bodyParser.json())
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Connect Database
connectDB();

//Set up handlebars
const handlebars = require('express-handlebars').create({
  defaultLayout: 'main',
});
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.set('port', process.env.PORT || 3000);

//CSS, clientside JS comes from here
app.use(express.static(__dirname + '/public'));

//Allows for CRUD calls for Yards, Sectors, Stacks, Panels, and Corners
app.use(stackRoutes);
app.use(panelRoutes);
app.use(cornerRoutes);
app.use(sectorRoutes);
app.use(yardRoutes);

app.get('/', (req, res, next) => {
  res.render('home');
});

app.get('/panelView', (req, res, next) => {
  res.render('panelView');
});

app.get('/stackView', (req, res, next) => {
  res.render('stackView');
});

app.get('/sectorView', (req, res, next) => {
  res.render('sectorView');
});

app.get('/cornerView', (req, res, next) => {
  res.render('cornerView');
});

app.get('/yardView', (req, res, next) => {
  res.render('yardView');
});

app.get('/panelDisplay', (req, res, next) => {
  res.render('panelDisplay');
});

app.use((req, res, next) => {
  res.status(404);
  res.render('404');
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500);
  res.send('500');
});

app.listen(app.get('port'), () => {
  console.log(
    'Express started on http://localhost:' +
      app.get('port') +
      '; press Ctrl-C to terminate.'
  );
});
