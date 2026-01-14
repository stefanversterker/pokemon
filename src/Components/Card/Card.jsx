import './Card.css';
import AbilityContainer from '../AbilityContainer/AbilityContainer.jsx';
import axios from 'axios';
import {useState, useEffect} from 'react';


function Card({pokeName, pokeMovesAmount, pokeWeightAmount, pokeImage, children}) {

  const [data, setData] = useState([]);
  const [error, toggleError] = useState(false);
  const [loading, toggleLoading] = useState(true);
  const [name, setName] = useState('');
  const [moves, setMoves] = useState(0);
  const [weight, setWeight] = useState(0);
  const [image, setImage] = useState('');
  const [abilities, setAbilities] = useState('');

  async function catchPokemon() {

    try {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`);

      setData(response.data);
      setName(response.data.name);
      setMoves(response.data.moves.length);
      setWeight(response.data.weight);
      setImage(response.data.sprites.front_default);
      setAbilities(response.data.abilities);
      /*console.log(response.data);*/

    } catch (error) {
      console.error(error);
      toggleError(true);
    } finally {
      toggleLoading(false);
    }
  }

  useEffect(() => {
    void catchPokemon();
  },[]);


  return (
    <article className="card">
      <h3>{name}</h3>
      <div className="poke-image pink-border"><img src={image} alt=""/></div>
      <h4>Moves: {moves}</h4>
      <h4>Weight: {weight}</h4>
      <h4>Abilities:</h4>
      <ul className="ability-list">
        {data?.abilities?.map((a) => (
          <li key={a.ability.name}>
            <AbilityContainer pokeAbility={a.ability.name}/>
          </li>
        ))}
      </ul>
    </article>
  );
}

export default Card;
