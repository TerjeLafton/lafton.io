import { Card, CardContent, CardMedia, Grid, makeStyles, ThemeProvider, Typography } from '@material-ui/core';
import React from 'react';

const AlbumCard = ({ image, title }) => {
    const useStyles = makeStyles((theme) => ({
        card: {
            borderRadius: '0px',
        },
        cardContent: {
            background: theme.palette.background.primary,
            color: theme.palette.primary.main,
        },
    }));
    const classes = useStyles();

    return (
        <Grid item>
            <Card className={ classes.card }elevation={ 20 }>
                <CardMedia component='img'
                            alt={ title }
                            height='400'
                            width='400'
                            image={ image }
                            title={ title}/>
                <CardContent className={ classes.cardContent }>
                    <Typography gutterBottom
                                variant='h5'
                                component='h2'
                                align='center'>
                                { title }
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
    );
}

export default AlbumCard