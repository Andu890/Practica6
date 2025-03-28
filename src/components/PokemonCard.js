import { Button, Card, CardActionArea, CardActions, CardContent, Box, Typography } from '@mui/material';

const PokemonCard = ({ item, setSelectedPokemon }) => {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <Box>
                <img src={item.sprites.front_default} alt={item.name} />
            </Box>
            <CardActionArea>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Nombre: {item.name}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        Peso: {item.weight}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        Tipo: {item.types.map(t => t.type.name).join(', ')}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="secondary" onClick={() => setSelectedPokemon(item)}>
                    Ver Detalle
                </Button>
            </CardActions>
        </Card>
    );
};

export default PokemonCard;
