import './AbilityContainer.css';

function AbilityContainer({pokeAbility}) {

  return (
    <div className="ability-container">
      <p>{pokeAbility}</p>
    </div>
  );
}

export default AbilityContainer;
