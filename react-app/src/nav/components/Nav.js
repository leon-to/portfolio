import React from 'react';
import {Drawer, List} from '@material-ui/core';

import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';

export default function Nav(){
    const {selectedIndex, setSelectedIndex} = React.useState(0);
    const navs = [
        {index:0, icon: <InboxIcon />, text: 'Inbox'},
        {index:1, icon: <DraftsIcon />, text: 'Draft'},
    ]

    return (
        <Drawer variant='permanent' anchor='left' open='true'>
            <List component="nav" aria-label="main mailbox folders">
                {navs.map(nav => (
                <ListItem button>
                    <ListItemIcon>
                        {nav.icon}
                    </ListItemIcon>
                    <ListItemText primary={nav.text} />
                </ListItem>
                ))}
                
            </List>
            <Divider />
        </Drawer>
    );
}