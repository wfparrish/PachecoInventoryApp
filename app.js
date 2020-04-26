const express = require('express');
const stackRouter = require('./routes/api/stacks');
const panelRouter = require('./routes/api/panels');
const cornerRouter = require('./routes/api/corners');
const sectorRouter = require('./routes/api/sectors');
const yardRouter = require('./routes/api/yards');
const connectDB = require('./config/db');
const app = express();
app.use(express.json());  //Make sure it comes back as json

//Connect Database
connectDB();



//Set up handlebars
const handlebars = require('express-handlebars').create({ defaultLayout:'main'});
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.set('port', process.env.PORT || 3000);

//CSS, clientside JS comes from here
app.use(express.static(__dirname + '/public'));

app.use('/api/stacks', require('./routes/api/stacks'));
app.use('/api/panels', require('./routes/api/panels'));
app.use('/api/corners', require('./routes/api/corners'));
app.use('/api/sectors', require('./routes/api/sectors'));
app.use('/api/yards', require('./routes/api/yards'));

//Allows for CRUD calls for Stacks, Panels, and Corners
app.use(stackRouter);
app.use(panelRouter);
app.use(cornerRouter);
app.use(sectorRouter);
app.use(yardRouter);

app.use('/', (req, res, next) => {
  res.render('home');
});

app.use((req, res, next) => {
  res.status(404);
  res.render('404');
})

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500);
  res.send('500');
});

app.listen(app.get('port'), () => {
  console.log( 'Express started on http://localhost:' +
    app.get('port') + '; press Ctrl-C to terminate.' );
})
