import React from 'react';
import {Grid, makeStyles} from '@material-ui/core';
import SwipeableViews from 'react-swipeable-views';
import Timeline from '../../timeline';
import Review from '../../review';

const useStyles = makeStyles(theme =>({
    container: {
        flexGrow: 1,
        width: '100vw',
        height: '100vh',
        spacing: 0,
    }
}));

export default function NavPanel(props) {
    const classes = useStyles();

    return (
        <Grid 
            container 
            justify="center"
            alignItems="center"
            className={classes.container}>
            <SwipeableViews
                index={props.index}
                onChangeIndex={props.setIndex}>
                <Review />
                <Timeline />
                <div>3</div>
                <div>4</div>
                <div>5</div>
            </SwipeableViews>
        </Grid>
    );
}