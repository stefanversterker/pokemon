import './ErrorMessage.css';
import pokeball from '/src/assets/pokeball.webp';

function ErrorMessage() {

  return (

    <main className="error-message-container">
      <h2>Error: we regret to inform you, your Pokemon have escaped</h2>
      <figure className="pokeball-image pink-border">
        <img src={pokeball} alt="Image of an open pokeball"/>
      </figure>
    </main>
  );}

export default ErrorMessage;