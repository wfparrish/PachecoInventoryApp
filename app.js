const express = require('express');
const connectDB = require('./config/db');
const app = express();

//Connect Database
connectDB();

//Set up handlebars
const handlebars = require('express-handlebars').create({ defaultLayout:'main'});
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.set('port', process.env.PORT || 3000);

//CSS, clientside JS comes from here
//In this app that includes jQuery files and Bootstrap files. Also style.css
app.use(express.static(__dirname + '/public'));


app.use('/', (req, res, next) => {
  res.render('home');
  //next() <-- allows express to continue to the next app.use() call
});

app.use('/api/stacks', require('./routes/api/stacks'));
app.use('/api/panels', require('./routes/api/panels'));
app.use('/api/corners', require('./routes/api/corners'));


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
