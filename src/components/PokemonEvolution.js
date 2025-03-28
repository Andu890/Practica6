import { Card, CardContent, Typography, Box, Button } from '@mui/material';

const PokemonEvolution = ({ data, id, setSelectedPokemon }) => {
    const evolutionId = parseInt(id) + 1;
    const evolution = data.items.find(p => p.id === evolutionId);

    if (!evolution) return null;

    return (
        <Card sx={{ maxWidth: 345, marginTop: 2 }}>
            <CardContent>
                <Typography variant="h6">Evolución</Typography>
                <Typography variant="body1">{evolution.name}</Typography>
                <Box>
                    <img src={evolution.sprites.front_default} alt={evolution.name} />
                </Box>
                <Button size="small" color="secondary" onClick={() => setSelectedPokemon(evolution)}>
                    Ver Detalle
                </Button>
            </CardContent>
        </Card>
    );
};

export default PokemonEvolution;
