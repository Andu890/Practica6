import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Card, CardContent, Typography, Box } from '@mui/material';
import PokemonEvolution from './PokemonEvolution';

const PokemonDetalle = () => {
    const { id } = useParams();
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!id) {
            console.log("No ID found in URL params.");
            return;
        }
        console.log(`Fetching data for Pokémon ID: ${id}`);

        async function fetchData() {
            try {
                setLoading(true);
                setError(null);
                const response = await fetch(
                    `https://pokeapi.co/api/v2/pokemon/${id}`
                );

                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const result = await response.json();
                setData(result);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        }

        fetchData();
    }, [id]);
    if (loading) return <h1>Loading...</h1>;
    if (error) return <h1>Error: {error}</h1>;
    if (!data) return <h1>No Data Found</h1>;

    return (
        <Card sx={{ maxWidth: 600, margin: "auto", padding: 2 }}>
            <Box>
                <img
                    src={data.sprites.front_default}
                    alt={data.name}
                />
            </Box>
            <CardContent>
                <Typography variant="h4">{data.name}</Typography>
                <Typography variant="body1">
                    Peso: {data.weight}
                </Typography>
                <Typography variant="body1">
                    Tipos: {data.types.map((t) => t.type.name).join(", ")}
                </Typography>
                <PokemonEvolution id={data.id} />
            </CardContent>
        </Card>
    );
}
export default PokemonDetalle;