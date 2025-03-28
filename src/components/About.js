import React, { useState } from 'react';
import Pokedex from './Pokedex';
import { Button, Card, CardContent, Typography, Box } from '@mui/material';
import PokemonEvolution from './PokemonEvolution';

const About = () => {
    const [selectedPokemon, setSelectedPokemon] = useState(null);

    const data = {
        "count": 1302, "items": [{"id": 1, "name": "bulbasaur", "weight": 69, "types": [{"type": {"name": "grass"}}, {"type": {"name": "poison"}}], "abilities": [{"ability": {"name": "overgrow"}}, {"ability": {"name": "chlorophyll"}}], "sprites": {"front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"}},  {"id": 2, "name": "ivysaur", "weight": 130, "types": [{"type": {"name": "grass"}}, {"type": {"name": "poison"}}], "sprites": {"front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png"}}, {"id": 3, "name": "venusaur", "weight": 1000, "types": [{"type": {"name": "grass"}}, {"type": {"name": "poison"}}], "sprites": {"front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png"}}, {"id": 4, "name": "charmander", "weight": 85, "types": [{"type": {"name": "fire"}}], "sprites": {"front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png"}}, {"id": 5, "name": "charmeleon", "weight": 190, "types": [{"type": {"name": "fire"}}], "sprites": {"front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png"}}, {"id": 6, "name": "charizard", "weight": 905, "types": [{"type": {"name": "fire"}}, {"type": {"name": "flying"}}], "sprites": {"front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png"}}, {"id": 7, "name": "squirtle", "weight": 90, "types": [{"type": {"name": "water"}}], "sprites": {"front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png"}}, {"id": 8, "name": "wartortle", "weight": 225, "types": [{"type": {"name": "water"}}], "sprites": {"front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png"}}, {"id": 9, "name": "blastoise", "weight": 855, "types": [{"type": {"name": "water"}}], "sprites": {"front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png"}}, {"id": 10, "name": "caterpie", "weight": 29, "types": [{"type": {"name": "bug"}}], "sprites": {"front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png"}}]
    }

    return (
        <div>
            <h1>Papudex</h1>
            {!selectedPokemon ? (
                <Pokedex data={data} setSelectedPokemon={setSelectedPokemon} />
            ) : (
                <Card sx={{ maxWidth: 600, margin: 'auto', padding: 2 }}>
                    <Box>
                        <img src={selectedPokemon.sprites.front_default} alt={selectedPokemon.name} />
                    </Box>
                    <CardContent>
                        <Typography variant="h4">{selectedPokemon.name}</Typography>
                        <Typography variant="body1">Peso: {selectedPokemon.weight}</Typography>
                        <Typography variant="body1">Tipos: {selectedPokemon.types.map(t => t.type.name).join(', ')}</Typography>
                        <PokemonEvolution data={data} id={selectedPokemon.id} setSelectedPokemon={setSelectedPokemon} />
                        <Button variant="contained" color="primary" onClick={() => setSelectedPokemon(null)}>
                            Volver
                        </Button>
                    </CardContent>
                </Card>
            )}
        </div>
    );
};

export default About;
