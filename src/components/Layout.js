import React from 'react';
import {Box, Container} from '@mui/material'
import Navbar from "./Navbar";

const Layout = ({ children }) => {
    return (
        <Box>
            <Navbar/>
            <Container className="container">
                { children }
            </Container>
            <Box className = "footer">
                derechos loles de qn sabe
            </Box>
        </Box>
    );
};

export default Layout;