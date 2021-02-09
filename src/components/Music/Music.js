import AlbumCard from './AlbumCard';
import Albums from '../../files/Albums';
import { Grid, makeStyles } from '@material-ui/core';
import React, { useEffect } from 'react';
import Title from '../Header/Title';

const Music = () => {
    useEffect(() => {
        document.title = 'Music Collection'
    });

    return (
        <Grid container
              justify='center'
              spacing={ 10 }>
            <Grid justify='center' container>
                <Title title='Music Collection'/>
            </Grid>
            { Albums.map((album) => (
                <AlbumCard key={ album.image } image={ album.image } title={ album.title }/>
            ))}
        </Grid>
    )
}

export default Music