const React = require('react');
const BeerCard = require('./components/BeerCard');
const Layout = require('./Layout');

function Beers(props) {
  return (
    <Layout>
      <main>
        <div>
        {props.beersFromApi.map( (beerObj, i) => {
          return (
            <a href={`/beers/${beerObj.id}`}>
            <BeerCard i={i} beerObj={beerObj} details={false}/>
            </a>
                
            );
          })
        }
        </div>
      </main>
    </Layout>
  );
}
module.exports = Beers;