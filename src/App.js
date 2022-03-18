import React, {useEffect, useState} from 'react';
import './App.css';
import axios from "axios";
import Card from "./components/Card";

function App() {
    const [pokemons, setPokemons] = useState([]);
    const [endpoint, setEndpoint] = useState("https://pokeapi.co/api/v2/pokemon")
    useEffect(() => {
        async function fetchData() {
            try {
                const result = await axios.get(`${endpoint}`);
                setPokemons(result.data);


            } catch (e) {
                console.error("NOT FOUND");
            }

        }

        fetchData();


    },);

    return (
        <div>

            {Object.keys(pokemons).length > 0 &&
                pokemons.results.map((pokemon) => {
                    return <Card key={pokemon.name} type={pokemon.name}/>
                })
            }

            <button type="button" onClick={() => setEndpoint(pokemons.previous)}
                    disabled={pokemons.previous === null}>Previous
            </button>
            <button type="button" onClick={() => setEndpoint(pokemons.next)}>Next</button>
        </div>
    );
}

export default App;
