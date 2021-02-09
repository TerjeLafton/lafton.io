import { BrowserRouter as Router } from 'react-router-dom';
import { CssBaseline, makeStyles } from '@material-ui/core';
import Header from './components/Header/Header';
import React from 'react';
import Routes from './configuration/Routes';
import ThemeContextProvider from './configuration/ThemeContextProvider';

const App = () => {
    const useStyles = makeStyles(theme => ({
        main: {
            [theme.breakpoints.up('sm')]: {
                margin: '5em',
            },
            [theme.breakpoints.down('xs')]: {
                margin: '2em',
            },
        },
    }));
    const classes = useStyles()

    return (
        <Router>
            <ThemeContextProvider>
                <CssBaseline/>
                <Header/>
                <div className={ classes.main }>
                    <Routes/>
                </div>
            </ThemeContextProvider>
        </Router>
    )
}

export default App