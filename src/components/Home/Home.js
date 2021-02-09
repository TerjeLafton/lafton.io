import { Grid, makeStyles } from '@material-ui/core';
import React, { useEffect } from 'react';
import Title from '../Header/Title'

const Home = () => {
    useEffect(() => {
        document.title = 'Homepage'
    });

    const useStyles = makeStyles((theme) => ({
        title: {
            color: theme.palette.primary.main,
            marginTop: 100,
            textAlign: 'center',
        },
    }));
    const classes = useStyles();

    return (
        <Grid container justify='center'>
            <Title title='Welcome to my website!'/>
        </Grid>
    )
}

export default Home