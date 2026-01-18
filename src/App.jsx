import './App.css';
import Card from './Components/Card/Card.jsx';
import axios from 'axios';
import {useState, useEffect} from 'react';
import Button from './Components/Button/Button.jsx';
import ErrorMessage from './Components/ErrorMessage/ErrorMessage.jsx';



function App() {

  const [data, setData] = useState([]);
  const [offset, setOffset] = useState(0);
  const [error, toggleError] = useState(false);



  async function catchPokemon() {

    toggleError(false);

    try {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=20`);

      setData(response.data);

    } catch (error) {
      console.error(error);
      toggleError(true);
    }
  }

  useEffect(() => {
    void catchPokemon();
  }, [offset]);



  return (
    <div className="everything-container blue-border">
      <header className="header">
        <h1>Pokemon</h1>
      </header>
      <nav className="nav">
        <Button buttonText="previous" onClick={() => {setOffset(offset - 20);}} disabled={data?.previous === null}/>
        <Button buttonText="next" onClick={() => {setOffset(offset + 20);}} disabled={data?.next === null}/>
      </nav>
      <main className="main-container green-border">

        {error ? <ErrorMessage/> :
          <ul>
          {data?.results?.map((p) => (
            <li key={p.url}>
              <Card pokeName={p.name}></Card>
            </li>
          ))}
        </ul>}
      </main>
    </div>
  );
}

export default App;
