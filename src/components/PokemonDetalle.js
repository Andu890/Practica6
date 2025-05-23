import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Card, CardContent, CardMedia, Typography, Box } from '@mui/material';

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
    <Card className="pokemon-detail-card">


    </Card>
);

export default PokemonDetalle;
