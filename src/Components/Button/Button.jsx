import './Button.css';

function Button({onClick, disabled, buttonText}) {

  return (

    <button type="button"
            onClick={onClick}
            disabled={disabled}
    >
      {buttonText}
    </button>
  );
}

export default Button;