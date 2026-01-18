import './Card.css';
import AbilityContainer from '../AbilityContainer/AbilityContainer.jsx';
import axios from 'axios';
import {useState, useEffect} from 'react';
import {useNavigate} from "react-router-dom";
import {Link} from "react-router-dom";


function Card({pokeName, pokeMovesAmount, pokeWeightAmount, pokeImage, children}) {

  const [data, setData] = useState(null);
  const [error, toggleError] = useState(false);
  const [loading, toggleLoading] = useState(true);
  const navigate = useNavigate();

  async function catchPokemon() {

    toggleError(false);
    toggleLoading(true);

    try {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`);

      setData(response.data);

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

      {error ? (<p>We regret to inform you, your Pokemon has escaped</p>) :
      <><h3>{data?.name}</h3>
        {loading ? (<p>Loading...</p>) :
          <div className="poke-image pink-border"><img src={data?.sprites?.front_default} alt={data?.name}/></div>}
        <h4>Moves: {data?.moves?.length}</h4>
        <h4>Weight: {data?.weight}</h4>
        <h4>Abilities:</h4>
        <ul className="ability-list">
          {data?.abilities?.map((a) => (
            <li key={a.ability.name}>
              <AbilityContainer pokeAbility={a.ability.name}/>
            </li>
          ))}
        </ul>
      </>}
    </article>
  );
}

export default Card;
