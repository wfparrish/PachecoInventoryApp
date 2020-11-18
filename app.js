const express = require('express');
const bodyParser = require('body-parser');
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

//These should be in the routes/api folder,
//exported, imported to this page using require()
//and then using the app.use() syntax
//.get() is the route file
//.render() is the view file

app.get('/sector1View', (req, res, next) => {
  res.render('sector1View');
});

app.get('/sector2View', (req, res, next) => {
  res.render('sector2View');
});

app.get('/sector3View', (req, res, next) => {
  res.render('sector3View');
});

app.get('/sector4View', (req, res, next) => {
  res.render('sector4View');
});

app.get('/sector5View', (req, res, next) => {
  res.render('sector5View');
});

app.get('/sector6View', (req, res, next) => {
  res.render('sector6View');
});

app.get('/sector7View', (req, res, next) => {
  res.render('sector7View');
});

app.get('/sector8View', (req, res, next) => {
  res.render('sector8View');
});

app.get('/sector9View', (req, res, next) => {
  res.render('sector9View');
});

app.get('/sector10View', (req, res, next) => {
  res.render('sector10View');
});

app.get('/sector11View', (req, res, next) => {
  res.render('sector11View');
});

app.get('/sector12View', (req, res, next) => {
  res.render('sector12View');
});
app.get('/sector13View', (req, res, next) => {
  res.render('sector13View');
});

app.get('/sector14View', (req, res, next) => {
  res.render('sector14View');
});

app.get('/sector15View', (req, res, next) => {
  res.render('sector15View');
});

app.get('/sectorMapView', (req, res, next) => {
  res.render('sectorMapView');
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

