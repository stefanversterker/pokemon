import './App.css';
import Card from './Components/Card/Card.jsx';
import AbilityContainer from './Components/AbilityContainer/AbilityContainer.jsx';
import axios from 'axios';
import {useState, useEffect} from 'react';


function App() {

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
      const response = await axios.get('https://pokeapi.co/api/v2/pokemon/jigglypuff');

      setData(response.data);
      setName(response.data.name);
      setMoves(response.data.moves.length);
      setWeight(response.data.weight);
      setImage(response.data.sprites.front_default);
      setAbilities(response.data.abilities);
      console.log(response.data);

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
    <div className="everything-container blue-border">
      <header className="header">
        <h1>Pokemon</h1>
      </header>
      <nav className="nav">
        <button>vorige</button>
        <button>volgende</button>
      </nav>
      <main className="main-container green-border">
        <Card pokeName={name}
              pokeMovesAmount={moves}
              pokeWeightAmount={weight}
              pokeImage={image}
        >
          {data?.abilities?.map((a) => (
            <li key={a.ability.name}>
              <AbilityContainer pokeAbility={a.ability.name}/>
            </li>
            ))}
        </Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </main>
    </div>
  );
}

export default App;
