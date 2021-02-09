import React from 'react';
import { AppBar, makeStyles, Toolbar } from '@material-ui/core';
import { Link } from 'react-router-dom';

const Header = () => {
    const useStyles = makeStyles((theme) => ({
        link: {
            fontSize: '25px',
            color: theme.palette.primary.main,
            paddingLeft: '75px',
            paddingRight: '75px',
            textDecoration: 'none',
        },
        appBar: {
            alignItems: 'center',
            background: theme.palette.background.primary
        },
    }));
    const classes = useStyles();

    return (
        <div>
            <AppBar className={ classes.appBar }>
                <Toolbar>
                    <Link className={ classes.link } to='/'> Home </Link>
                    <Link className={ classes.link } to='/music'> Music </Link>
                    <Link className={ classes.link } to='/about'> About </Link>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Header