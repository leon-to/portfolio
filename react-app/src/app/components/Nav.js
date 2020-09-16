import React, { useContext } from 'react';
import {TabIndexContext} from '../contexts/TabIndexContext';

import {Avatar, Drawer, List, Tabs, Tab, Grid, makeStyles} from '@material-ui/core';
import TimelineIcon from '@material-ui/icons/Timeline';
import AccountTreeIcon from '@material-ui/icons/AccountTree';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import EmailIcon from '@material-ui/icons/Email';
import avatar from '../assets/leon-to.png';

const useStyles = makeStyles(theme => ({
    tab: {
        fontSize: '18px',
    }
}));

export default function Nav(props){
    const classes = useStyles();
    const {TabIndex, setTabIndex} = useContext(TabIndexContext);

    const tabs = [
        {icon: <Avatar src={avatar}/>, label: 'Leon To'},
        {icon: <TimelineIcon fontSize='large'/>, label: 'Timeline'},
        {icon: <AccountTreeIcon fontSize='large'/>, label: 'Projects'},
        {icon: <EqualizerIcon fontSize='large'/>, label: 'Strengths'},
        {icon: <EmailIcon fontSize='large'/>, label: 'Contact'},
    ]


    const onChange = (event, newIndex) =>{
        setTabIndex(newIndex);
    } 

    return (
        <Drawer variant='permanent' anchor='top' open='true'>
            <Grid container 
                direction="row"
                justify="center"
                alignItems="center">
                <Tabs 
                    orientation='horizontal'
                    variant='scrollable'
                    value={TabIndex}
                    onChange={onChange}>

                    {tabs.map(tab => (
                        <Tab icon={tab.icon} label={tab.label} className={classes.tab}/>
                    ))}
                </Tabs>
            </Grid>
        </Drawer>
    );
}