import React from 'react';
import {Avatar, Drawer, List, Tabs, Tab} from '@material-ui/core';

import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import TimelineIcon from '@material-ui/icons/Timeline';
import AccountTreeIcon from '@material-ui/icons/AccountTree';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import avatar from '../assets/leon-to.png';

export default function Nav(){
    const [value, setValue] = React.useState(0);
    
    const tabs = [
        {icon: <Avatar src={avatar}/>, label: 'Leon To'},
        {icon: <TimelineIcon />, label: 'Timeline'},
        {icon: <AccountTreeIcon />, label: 'Projects'},
        {icon: <EqualizerIcon />, label: 'Strengths'},
    ]

    const onChange = (event, newValue) =>{
        setValue(newValue);
    } 

    return (
        <Drawer variant='permanent' anchor='left' open='true'>
            <Tabs 
                orientation='vertical'
                variant='scrollable'
                value={value}
                onChange={onChange}>

                {tabs.map(tab => (
                    <Tab icon={tab.icon} label={tab.label} />
                ))}
            </Tabs>

            <Divider />
        </Drawer>
    );
}