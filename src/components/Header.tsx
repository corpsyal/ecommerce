import React from 'react';
import { AppBar, Toolbar, Button, makeStyles } from '@material-ui/core';

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
                <Button color="inherit">Card</Button>
            </Toolbar>
        </AppBar>
    );
}

export default Header;