import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const HomeContext = createContext();

export const HomeContextProvider = ({children}) =>{
    
    const [loading, setLoading] = useState(false);
    const [products, setProducts] = useState([]); // initialize with empty array
    
    useEffect(() => {
      setLoading(true);
      axios.get('https://fakestoreapi.com/products')
        .then((data) => setProducts(data.data))
        .finally(() => {
          setLoading(false);
        });
    }, []);
  
    const values = {products, setProducts, loading, setLoading};
  
    return (
      <HomeContext.Provider value={values}>
        {children}
      </HomeContext.Provider>
    )
  }
  

export const useHomeContext = ()=> useContext(HomeContext);