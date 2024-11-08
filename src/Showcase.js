import bulbasaurImage from "./images/bulbasaur.jpg"

function Showcase() {
    const favPokemon = "Bulbasaur";
    const pokeCharacteristics = {
        type: "Grass",
        move: "Vine Whip"
    };
    return (
        <div>
            <h1>{favPokemon}'s Showcase Component</h1>
            <img src={bulbasaurImage} alt={favPokemon}></img>
            <h2>{favPokemon}'s type is <span style={{backgroundColor: "green", color: "white"}}>{pokeCharacteristics.type}</span> and one of their moves is <span style={{backgroundColor: "fcfaf9", color: "a2d729"}}>{pokeCharacteristics.move}</span>.</h2>
        </div>
    )
}

export default Showcase
