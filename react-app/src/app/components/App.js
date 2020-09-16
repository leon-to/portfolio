import React, {useEffect, useState} from 'react';
import Nav from './Nav';
import NavPanel from './NavPanel';
import { TabIndexProvider } from '../contexts/TabIndexContext';

export default function App(props) {

    return (
        <TabIndexProvider>
            <Nav/>
            <NavPanel/>
        </TabIndexProvider>
    );
}