import React, {createContext, useReducer, useState, useEffect} from 'react';
import {useHistory, useLocation} from 'react-router-dom';
import queryString from 'query-string';

const TabIndexContext = createContext();

function TabIndexProvider({children}){
    const location = useLocation();
    const history = useHistory();
    const params =   queryString.parse(location.search);
    const [TabIndex, setTabIndex] = useState(0);

    useEffect(() => {
        if(params !== null){
            setTabIndex(parseInt(params.tab));
        }
    }, []);

    useEffect(() =>{
        history.push('/?tab=' + TabIndex);
    }, [TabIndex]);

    return <TabIndexContext.Provider value={{TabIndex, setTabIndex}}>{children}</TabIndexContext.Provider>
}

export {TabIndexContext, TabIndexProvider};