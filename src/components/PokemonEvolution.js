import { Card, CardContent, Typography, Box, Button } from '@mui/material';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const PokemonEvolution = ({ id }) => {
    const evolutionId = parseInt(id) + 1;
    const [evolution, setEvolution] = useState(null);

    useEffect(() => {
        if (!id) {
            console.log("No ID provided for evolution.");
            return;
        }

        async function fetchEvolution() {
            try {
                const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${evolutionId}`);
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const data = await response.json();
                setEvolution(data);
            } catch (error) {
                console.error("Error fetching evolution data:", error);
            }
        }
        fetchEvolution();
    }, [id, evolutionId]);

    if (!evolution) return null;

    return (
        <>
            <Card sx={{ maxWidth: 345, marginTop: 2 }}>
                <CardContent>
                    <Typography variant="h6">Evolución</Typography>
                    <Typography variant="body1">{evolution.name}</Typography>
                    <Box>
                        <img src={evolution.sprites.front_default} alt={evolution.name} />
                    </Box>
                    <Button
                        size="small"
                        color="secondary"
                        LinkComponent={Link}
                        to={`/pokemon/${evolution.id}`}
                    >
                        Ver Detalle
                    </Button>

                </CardContent>
            </Card>
            <Button variant="contained" color="primary" component={Link} to={`/about`}>
                Volver
            </Button>
        </>
    );
};

export default PokemonEvolution;
