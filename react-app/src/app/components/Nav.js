import React from 'react';
import {Avatar, Drawer, List, Tabs, Tab, Grid} from '@material-ui/core';

import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import TimelineIcon from '@material-ui/icons/Timeline';
import AccountTreeIcon from '@material-ui/icons/AccountTree';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import EmailIcon from '@material-ui/icons/Email';
import avatar from '../assets/leon-to.png';

export default function Nav(props){
    const tabs = [
        {icon: <Avatar src={avatar}/>, label: 'Leon To'},
        {icon: <TimelineIcon />, label: 'Timeline'},
        {icon: <AccountTreeIcon />, label: 'Projects'},
        {icon: <EqualizerIcon />, label: 'Strengths'},
        {icon: <EmailIcon />, label: 'Contact'},
    ]


    const onChange = (event, newIndex) =>{
        props.setIndex(newIndex);
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
                    value={props.index}
                    onChange={onChange}>

                    {tabs.map(tab => (
                        <Tab icon={tab.icon} label={tab.label} />
                    ))}
                </Tabs>
            </Grid>
        </Drawer>
    );
}