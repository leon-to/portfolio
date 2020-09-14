import React, {useEffect, useState} from 'react';
import Nav from './Nav';
import NavPanel from './NavPanel';
import queryString from 'query-string';
import {useHistory, useLocation} from 'react-router-dom';

export default function App(props) {
    const [index, setIndex] = useState(0);
    const location = useLocation();
    const history = useHistory();
    const params = queryString.parse(location.search);

    useEffect(() => {
        if(params !== null){
            setIndex(parseInt(params.tab));
        }
    }, []);

    useEffect(() =>{
        history.push('/?tab=' + index);
    }, [index]);

    return (
        <div>
            <Nav index={index} setIndex={setIndex}/>
            <NavPanel index={index} setIndex={setIndex}/>
        </div>
    );
}