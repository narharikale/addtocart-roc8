import { useState } from "react";
import { createContext, useContext } from "react";
import data from '../data.json';

const datacontext = createContext(null);

function DataProvider({children}){

    
    const [products] = useState(data.products)
    const [cart , setCart] = useState([]);
    const [saveLater , setSaveLater ] = useState([])


    return (
        <datacontext.Provider value={{ products , cart , setCart , saveLater , setSaveLater }}>
            { children }
        </datacontext.Provider>
    )
}


const useData = () => useContext(datacontext);
export { DataProvider , useData }