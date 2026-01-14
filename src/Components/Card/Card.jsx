import './Card.css';

function Card({pokeName, pokeMovesAmount, pokeWeightAmount, pokeImage, children}) {

  return (
    <article className="card">
      <h3>{pokeName}</h3>
      <div className="poke-image pink-border"><img src={pokeImage} alt=""/></div>
      <h4>Moves: {pokeMovesAmount}</h4>
      <h4>Weight: {pokeWeightAmount}</h4>
      <h4>Abilities:</h4>
      <ul className="ability-list">
        {children}
      </ul>
    </article>
  );
}

export default Card;
