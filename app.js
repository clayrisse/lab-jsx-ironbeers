const express = require('express');
const erv = require('express-react-views');
const PunkAPIWrapper = require('punkapi-javascript-wrapper');

const app = express();
const punkAPI = new PunkAPIWrapper();

// VIEW ENGINE SETUP
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', erv.createEngine());

// MIDDLEWARE
app.use(express.static(__dirname + '/public'));

// Add the route handlers here:

app.get('/', (req, res) => {
  res.render('Home');
});

app.get('/beers', (req, res) => {
  punkAPI.getBeers()
  .then(beersFromApi => {
    // console.log('All the Beers from the API:', beersFromApi);
    const data = { beersFromApi: beersFromApi};
    res.render('Beers', data);
  })
  .catch(error => console.log(error))
});

app.get('/beers/:id', (req, res) => {
  punkAPI.getBeer(req.params.id)
  .then(detailFromApi => {
    // console.log('DETAIL Beer from API:', detailFromApi);
    const dataId = detailFromApi[0]; 
    res.render('BeerDetail', dataId);
  })
  .catch(error => console.log(error))
});

app.get('/random-beer', (req, res) => {
  punkAPI.getRandom()
  .then(responseFromApi => {
    // console.log('Random Beer from API:', responseFromApi);
    const data = responseFromApi; 
    res.render('RandomBeer', data);
  })
  .catch(error => console.log(error))
});

app.listen(3000, () => {
  console.log('🏃‍ on port 3000')
});