import React, { useState, createContext, useEffect } from 'react';

const UserContext = createContext();

const UserContextProvider = ({ children }) => {
    const [userData, setUserData] = useState([]);

    useEffect(() => {
        fetch("/data/userdata.json")
        .then(response => response.json())
        .then(jsonData => setUserData(jsonData))
        .catch(_ => console.error('Error loading user data'));
    }, []);

    return (
        <UserContext.Provider value={{userData}}>
            {children}
        </UserContext.Provider>
    )
}

export {UserContext, UserContextProvider}