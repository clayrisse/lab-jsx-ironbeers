const React = require('react');
const BeerCard = require('./components/BeerCard');
const Layout = require('./Layout');

function BeerDetail(props) {
  return (
    <Layout>
      <main>
        <div>
          <img src={props.image_url} width="200" alt="" />
        </div>
        <div>
          <h3>{props.name}</h3>
          <h5>{props.tagline}</h5>
          <p>{props.description}</p>
          <h5>Food Pairing</h5>
          <ul>
            { 
              props.food_pairing.map( (pair, i) => {
              return (<li key="i">{pair}</li>);
              })
            }
          </ul>
          <p><span>Brewers Tips:</span>{props.brewers_tips}</p>
        </div>
      </main>
    </Layout>
  );
}
module.exports = BeerDetail;

