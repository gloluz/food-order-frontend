import React, { useState, useEffect } from "react";
import axios from "axios";

import "./App.css";

import Header from "./components/Header";
import Section from "./components/Section";
import Container from "./components/Container";
import Cart from "./components/Cart";
import Footer from "./components/Footer";

const App = () => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [selectedProducts, setSelectedProducts] = useState([]);

  const fetchData = async () => {
    const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/`);

    setData(response.data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const categories = isLoading
    ? []
    : data.categories.filter(category => category.meals.length > 0);

  const findProductIndex = title => {
    const index = selectedProducts.findIndex(p => p.title === title);

    return index >= 0 ? index : null;
  };

  const handleProductClick = ({ title, price }) => {
    const newSelectedProducts = [...selectedProducts];
    const index = findProductIndex(title);

    if (index !== null) {
      newSelectedProducts[index].quantity += 1;
    } else {
      newSelectedProducts.push({ quantity: 1, title, price });
    }

    setSelectedProducts(newSelectedProducts);
  };

  const handleAdd = product => {
    const index = findProductIndex(product.title);
    const newSelectedProducts = [...selectedProducts];
    newSelectedProducts[index].quantity += 1;

    setSelectedProducts(newSelectedProducts);
  };

  const handleRemove = product => {
    const index = findProductIndex(product.title);
    let newSelectedProducts = [...selectedProducts];

    if (newSelectedProducts[index].quantity === 1) {
      newSelectedProducts.splice(index, 1);
    } else {
      newSelectedProducts[index].quantity -= 1;
    }

    setSelectedProducts(newSelectedProducts);
  };

  return (
    <>
      {isLoading ? (
        <p>En chargement...</p>
      ) : (
        <div>
          <Header title={data.restaurant.name} data={data} />

          <Container>
            <div className="d-flex sb">
              <div className="content">
                {categories.map((category, index) => (
                  <Section
                    key={index}
                    mainTitle={category.name}
                    data={category.meals}
                    onProductClick={handleProductClick}
                  />
                ))}
              </div>

              <Cart
                selectedProducts={selectedProducts}
                onAdd={handleAdd}
                onRemove={handleRemove}
              />
            </div>
          </Container>

          <Footer />
        </div>
      )}
    </>
  );
};

export default App;
