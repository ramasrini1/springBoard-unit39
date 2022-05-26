import Pokecard from "./Pokecard";


const Pokedex = (props) => {
  
	return (
  <div className="Pokedex">
    <div className="Pokedex-title">Pokedex</div>
    <div className="Pokedex-cards">
      {props.pokemon.map(p => (
          <Pokecard
            key = {p.id}
            id={p.id}
            name={p.name}
            type={p.type}
            exp={p.base_experience}
          />
        ))
      }
    </div>
  </div>
	);
};

export default Pokedex