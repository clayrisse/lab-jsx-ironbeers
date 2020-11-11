const React = require('react');


function BeerCard(props) {
  return (
    <div key={props.i}>
        <img src={props.beerObj.image_url} height="100" alt="" />
        <h3>{props.beerObj.name}</h3>
        <h5>{props.beerObj.tagline}</h5>
        <p>{props.beerObj.description}</p>
        {
            props.details && 
            ( <>
                <h5>Food Pairing</h5>
              <ul>
                { 
                  props.beerObj.food_pairing.map( (pair, i) => {
                  return (<li key="i">{pair}</li>);
                })
                }
                {props.beerObj.brewers_tips}
              </ul>
              <p><span>Brewers Tips:</span>{props.beerObj.brewers_tips}</p>
            </>)
        }
    </div>
    );
}
module.exports = BeerCard;