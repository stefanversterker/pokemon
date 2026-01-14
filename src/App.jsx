import './App.css';
import Card from './Components/Card/Card.jsx';
import AbilityContainer from './Components/AbilityContainer/AbilityContainer.jsx';
import axios from 'axios';
import {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';


function App() {

  const [data, setData] = useState([]);
  /*const [error, toggleError] = useState(false);
  const [loading, toggleLoading] = useState(true);
  const [name, setName] = useState('');
  const [moves, setMoves] = useState(0);
  const [weight, setWeight] = useState(0);
  const [image, setImage] = useState('');
  const [abilities, setAbilities] = useState('');*/
  const [next, setNext] = useState(null);
  const navigate = useNavigate();



  async function catchPokemon() {

    try {
      const response = await axios.get('https://pokeapi.co/api/v2/pokemon/');

      setData(response.data);
      /*setName(response.data.name);
      setMoves(response.data.moves.length);
      setWeight(response.data.weight);
      setImage(response.data.sprites.front_default);
      setAbilities(response.data.abilities);*/
      setNext(response.data.next)
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
  }, []);

  useEffect(() => {
    void catchPokemon();
  }, [next]);



  return (
    <div className="everything-container blue-border">
      <header className="header">
        <h1>Pokemon</h1>
      </header>
      <nav className="nav">
        <button type="button" onClick={navigate(`${next}`)}>volgende</button>
      </nav>
      <main className="main-container green-border">
        <ul>
          {data?.results?.map((p) => (
            <li key={p.name}>
              <Card pokeName={p.name}></Card>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;
