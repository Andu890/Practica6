import React from "react";
import { AppBar, Toolbar, IconButton, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Sidebar from "./Sidebar";

const Navbar = () => {
    const [drawerOpen, setDrawerOpen] = React.useState(false);

    const toggleDrawer = (open) => () => {
        setDrawerOpen(open);
    };

    return (
        <>
            <AppBar position="static">
                <Toolbar>

                    <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer(true)}>
                        <MenuIcon />
                    </IconButton>


                    <Typography variant="h6" sx={{ flexGrow: 1 }}>
                        Mi Aplicación
                    </Typography>
                </Toolbar>
            </AppBar>


            <Sidebar drawerOpen={drawerOpen} toggleDrawer={toggleDrawer} />
        </>
    );
};

export default Navbar;
