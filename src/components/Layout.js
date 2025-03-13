import React from 'react';
import {Box, Container} from '@mui/material'

const Layout = ({ children }) => {
    return (
        <Box>
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