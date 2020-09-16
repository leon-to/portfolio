import React, {useContext} from 'react';
import {TabIndexContext} from '../contexts/TabIndexContext';
import Timeline from '../../timeline';
import Review from '../../review';
import Strength from '../../strength';

import {Grid, makeStyles} from '@material-ui/core';
import SwipeableViews from 'react-swipeable-views';

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
    const {TabIndex, setTabIndex} = useContext(TabIndexContext);

    return (
        <Grid 
            container 
            justify="center"
            alignItems="center"
            className={classes.container}>
            <SwipeableViews
                index={TabIndex}
                onChangeIndex={setTabIndex}>
                <Review />
                <Timeline />
                <div>3</div>
                <Strength />
                <div>5</div>
            </SwipeableViews>
        </Grid>
    );
}