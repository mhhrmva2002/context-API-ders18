import { createContext, useContext, useState } from "react";

const BasketContext = createContext();

export const BasketContextProvider = ({children}) =>{
    const[basket,setBasket] =  useState([]);
    const values = {
        basket,setBasket
    };

    return (
        <BasketContext.Provider value={values}>
            {children}
        </BasketContext.Provider>
    )
}

export const useBasketContext = ()=> useContext(BasketContext);