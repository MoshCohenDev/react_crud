import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import CardList from "./Components/Cards/CardsList";
import AddProduct from "./Components/AddProduct";
import TextField from "@mui/material/TextField";

const App = () => {
  const [products, setProducts] = useState([]);
  const [filterProduct, setFilterProduct] = useState([]);

  const data = async () => {
    const res = await axios("https://fakestoreapi.com/products");
    let usersData = res.data;
    const newList = usersData.map((product) => {
      return {
        id: product.id,
        name: product.title,
        description: product.description,
        price: product.price,
        picture: product.image,
      };
    });
    setProducts(newList);
    setFilterProduct(newList);
  };
  const searchOrder = (event) => {
    let value = event.toLowerCase();
    let result = [];
    result = products.filter((data) => {
      return data.name.search(value) !== -1;
    });
    setFilterProduct(result);
  };
  const removeItem = (item) => {
    const filterData = filterProduct.filter(
      (productId) => productId.id !== item.id
    );
    setFilterProduct(filterData);
  };
  const addItem = (newProduct) => {
    setFilterProduct([...filterProduct, newProduct]);
  };

  const updateId = (item) => {
    const newList = filterProduct.map((product) =>
      item.id === product.id ? item : product
    );

    setFilterProduct(newList);
  };
  useEffect(() => {
    data();
  }, []);
  return (
    <div className="container">
      <h1>My store</h1>
      <TextField
        onChange={(e) => searchOrder(e.target.value)}
        id="outlined-basic"
        label="search"
        variant="outlined"
        type="text"
      />
      <AddProduct addItem={addItem} />
      <CardList
        products={filterProduct}
        removeItem={removeItem}
        updateId={updateId}
      />
    </div>
  );
};

export default App;


