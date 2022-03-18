import React, {useEffect, useState} from 'react';
import axios from "axios";
import './Card.css'

function Card({type}) {
    const [pokemon, setPokemon] = useState([]);
    useEffect(() => {
        async function fetchData() {
            try {
                const result = await axios.get(`https://pokeapi.co/api/v2/pokemon/${type}`);
                setPokemon(result.data);

            } catch (e) {
                console.error("NOT FOUND");
            }

        }

        fetchData();

    },);
    return (
        <div>


            {Object.keys(pokemon).length > 0 &&
                <section>
                    <h4>{pokemon.name}</h4>
                    <img src={pokemon.sprites.front_default} alt="{pokemon.name}"/>
                    <p>Weight: {pokemon.weight}</p>
                    <p>Moves: {pokemon.moves.length}</p>
                    <p> Abilities:</p>
                    <ul>
                        {pokemon.abilities.map((ability) => {
                            return (<li key={pokemon.slot}>{ability.ability.name}</li>)
                        })}
                    </ul>


                </section>
            }

        </div>
    );
}

export default Card;