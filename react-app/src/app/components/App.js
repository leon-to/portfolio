import React from 'react';
import Nav from './Nav';
import NavPanel from './NavPanel';

export default function App() {
    const [index, setIndex] = React.useState(0);

    return (<div>
        <Nav index={index} setIndex={setIndex}/>
        <NavPanel index={index} setIndex={setIndex}/>
    </div>);
}