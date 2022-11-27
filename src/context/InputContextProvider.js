import React, {  useState, createContext } from 'react';

export const InputContext = createContext();

const Input = ({children}) => {

    const [search, setSearch] = useState("");

    return (
        <InputContext.Provider value={{search, setSearch}}>
            {children}
        </InputContext.Provider>
    );
};

export default Input;