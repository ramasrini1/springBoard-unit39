import './Pokecard.css';
import './Pokedex.css';

const POKE_API = 'https://raw.githubusercontent.com/' +
  'PokeAPI/sprites/master/sprites/pokemon/';

const Pokecard = (props) => {
  let imgSrc = `${POKE_API}${props.id}.png`;
	return (
    <div className="Pokecard">
      <div className="Pokecard-title">{props.name}</div>
      <img  src={imgSrc} alt="poke" />
      Type: {props.type}<br></br>
      Exp: {props.exp}
    </div>
	);
};

export default Pokecard