import React, { useEffect, useState } from "react";
import axios from "axios";

import "./App.css";

import Pokemon from "./gotta-catch-em-all-transparent-pokemon-logo-11.png";

const App = () => {
  const [pokemon, setPokemon] = useState();
  const [singlePokemon, setSinglePokemon] = useState([]);
  const [type, setType] = useState();
  const [moves, setMoves] = useState();
  const [img, setImg] = useState();
  const [loading, setLoading] = useState(true);

  const fetchPokemonList = async () => {
    const poke = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    const pokeJ = await poke.json();
    console.log(pokeJ);
    setSinglePokemon(pokeJ);
    setType(pokeJ.types[0].type.name);
    setMoves(pokeJ.moves.length);
    setImg(pokeJ.sprites["front_default"]);
    setLoading(false);
  };
  useEffect(() => {
    fetchPokemonList();
  }, []);

  const enterName = (e) => {
    setPokemon(e.target.value);
  };

  const Search = () => {
    if (pokemon === "") {
      alert("Give me a name to search");
    } else {
      setLower(pokemon.toLowerCase());
      fetchPokemonList();
      setPokemon("");
    }
  };

  return (
    <div className="App">
      <div className="container-fluid">
        <div className="col-12 text-center text-white bg-danger py-3 pb-4">
          <div>
            <img src={Pokemon} alt="pokemon" className="poke" />
          </div>
          <input
            type="text"
            placeholder="Enter name of pokemon"
            value={pokemon}
            onChange={enterName}
            className="col-2 py-1 my-3"
          />
          <button
            className="btn-warning py-1 px-2 mx-2 text-white fw-bold fs-5"
            onClick={Search}
          >
            See Stats
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
