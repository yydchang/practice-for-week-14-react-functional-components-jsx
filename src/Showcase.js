import bulbasaurImage from "./images/bulbasaur.jpg"
import "./Showcase.css"

function Showcase() {
    const favPokemon = "Bulbasaur";
    const pokeCharacteristics = {
        type: "Grass",
        move: "Vine Whip"
    };
    const imageStyle = {
        borderRadius: "50%",
        height: 500,
        width: 500
    }
    return (
        <div className="showcase">
            <h1>{favPokemon}'s Showcase Component</h1>
            <img src={bulbasaurImage} alt={favPokemon} style={imageStyle}></img>
            <h2>{favPokemon}'s type is <span className="type">{pokeCharacteristics.type}</span> and one of their moves is <span className="move">{pokeCharacteristics.move}</span>.</h2>
        </div>
    )
}

export default Showcase
