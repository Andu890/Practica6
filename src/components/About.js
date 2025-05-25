import { Grid } from '@mui/material';
import PokemonCard from './PokemonCard';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

const About = () => {

    const data = {
        "count": 1302, "items": [{"id": 1, "name": "bulbasaur", "weight": 69, "types": [{"type": {"name": "grass"}}, {"type": {"name": "poison"}}], "abilities": [{"ability": {"name": "overgrow"}}, {"ability": {"name": "chlorophyll"}}], "sprites": {"front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"}},  {"id": 2, "name": "ivysaur", "weight": 130, "types": [{"type": {"name": "grass"}}, {"type": {"name": "poison"}}], "sprites": {"front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png"}}, {"id": 3, "name": "venusaur", "weight": 1000, "types": [{"type": {"name": "grass"}}, {"type": {"name": "poison"}}], "sprites": {"front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png"}}, {"id": 4, "name": "charmander", "weight": 85, "types": [{"type": {"name": "fire"}}], "sprites": {"front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png"}}, {"id": 5, "name": "charmeleon", "weight": 190, "types": [{"type": {"name": "fire"}}], "sprites": {"front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png"}}, {"id": 6, "name": "charizard", "weight": 905, "types": [{"type": {"name": "fire"}}, {"type": {"name": "flying"}}], "sprites": {"front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png"}}, {"id": 7, "name": "squirtle", "weight": 90, "types": [{"type": {"name": "water"}}], "sprites": {"front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png"}}, {"id": 8, "name": "wartortle", "weight": 225, "types": [{"type": {"name": "water"}}], "sprites": {"front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png"}}, {"id": 9, "name": "blastoise", "weight": 855, "types": [{"type": {"name": "water"}}], "sprites": {"front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png"}}, {"id": 10, "name": "caterpie", "weight": 29, "types": [{"type": {"name": "bug"}}], "sprites": {"front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png"}}]
    }

    return (
        <div>
            <h1>Papudex</h1>
            <Grid container spacing={3} justifyContent="center">
                {data.items.map((item, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <PokemonCard item={item} />
                    </Grid>
                ))}
            </Grid>
            <Button
                variant="contained"
                color="primary"
                component={Link}
                to={`/`}
            >
                Volver
            </Button>
        </div>
    );
};


export default About;
