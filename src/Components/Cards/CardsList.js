import React from "react";
import Card from "./Card/Card";
import "./Cards.css";
const CardList = ({ products, removeItem, updateId }) => {
  return (
    <div className="cards_container">
      {products.map((product, i) => {
        return (
          <Card
            key={i}
            id={i}
            removeItem={removeItem}
            product={product}
            updateId={updateId}
          />
        );
      })}
    </div>
  );
};

export default CardList;
