const React = require('react');
const Layout = require('./Layout')


function Home() {

  return (
      <Layout>
        <main>
            <h1>Home</h1>
            <img src="/images/beer.png"/>
            <div><a href="/beers" >Check the Beers!</a></div>
            <div><a href="/random-beer" >Check a Random Beer</a></div>
        </main>
      </Layout>
  );
  
}


module.exports = Home;