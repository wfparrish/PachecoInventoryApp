const express = require('express');
const stackRoutes = require('./routes/api/stacks');
const panelRoutes = require('./routes/api/panels');
const cornerRoutes = require('./routes/api/corners');
const sectorRoutes = require('./routes/api/sectors');
const yardRoutes = require('./routes/api/yards');
const connectDB = require('./config/db');
const app = express();
app.use(express.json());

//Connect Database
connectDB();

//Set up handlebars
const handlebars = require('express-handlebars').create({ defaultLayout:'main'});
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.set('port', process.env.PORT || 3000);

//CSS, clientside JS comes from here
app.use(express.static(__dirname + '/public'));

//Allows for CRUD calls for Stacks, Panels, and Corners
app.use(stackRoutes);
app.use(panelRoutes);
app.use(cornerRoutes);
app.use(sectorRoutes);
app.use(yardRoutes);

app.get('/', (req, res, next) => {
  res.render('home');
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
  console.log( 'Express started on http://localhost:' +
    app.get('port') + '; press Ctrl-C to terminate.' );
});
