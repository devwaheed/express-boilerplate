var express  = require('express'),
    path     = require('path')
		hbs			 = require('hbs'),
    app      = express();


// setting view engine
hbs.registerPartials(path.join(__dirname, '/views/partials'));
app.set('view engine', 'hbs')

// set static directory
app.use(express.static(path.join(__dirname, '/public')));


app.get('/', (req, res) => {
    res.send('index.html');
});

app.get('/about', (req, res) => {
	res.render("about.hbs")
});

app.listen(3000, () => {
    console.log('Server is running at http://localhost:3000');
});
