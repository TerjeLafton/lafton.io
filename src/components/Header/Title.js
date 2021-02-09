import { makeStyles, Typography } from '@material-ui/core';
import React from 'react';

const Title = ({ title }) => {
    const useStyles = makeStyles((theme) => ({
        title: {
            color: theme.palette.primary.main,
            marginTop: 100,
        }
    }));
    const classes = useStyles();

    return (
        <Typography className={ classes.title } component='h1' paragraph variant='h2'>{ title }</Typography>
    )
}

export default Title