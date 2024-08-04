import { useEffect, useState, createContext, useContext } from "react";
import { API_URL } from "../const";

export const ProdutContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("");

  const categories = {
    tea: "Чай",
    coffee: "Кофе",
    teapots: "Чайники",
    cezves: "Турки",
    other: "Другое",
  };

  useEffect(() => {
    if (category) {
      fetch(`${API_URL}/api/products/${category}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error(response.statusText);
          }
          return response.json();
        })
        .then((data) => setProducts(data))
        .catch((err) => console.error(`Error fetching products: ${err}`));
    }
  }, [category]);

  return (
    <>
      <ProdutContext.Provider value={{ products, setCategory, categories }}>
        {children}
      </ProdutContext.Provider>
    </>
  );
};

export const useProducts = () => {
  return useContext(ProdutContext);
};
