var express  = require('express'),
    path     = require('path')
	hbs			 = require('hbs'),
    app      = express();

// get port
const port = process.env.PORT || 3000;

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

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
