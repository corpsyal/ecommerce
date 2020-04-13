import React from 'react';
import { AppBar, Toolbar, makeStyles } from '@material-ui/core';
import Cart from './Cart';

const useStyles = makeStyles({
    toolbar: {
        justifyContent: 'flex-end'
    }
});

const Header = () => {
    const classes = useStyles();

    return (
        <AppBar position="static">
            <Toolbar className={classes.toolbar}>
                <Cart />
            </Toolbar>
        </AppBar>
    );
}

export default Header;