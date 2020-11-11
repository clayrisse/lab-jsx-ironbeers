const React = require('react');
const BeerCard = require('./components/BeerCard');
const Layout = require('./Layout');

function RandomBeer(props) {
  return (
    <Layout>
      <main>
            <div>
             <BeerCard key={0} beerObj={props[0]} details={true}/>

            
            </div>
      </main>
    </Layout>
  );
}
module.exports = RandomBeer;


