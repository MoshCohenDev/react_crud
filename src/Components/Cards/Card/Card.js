import React from "react";
import UpdateProduct from "../../UpdateProduct";

import "./card.css";
const Card = ({ product, removeItem, updateId }) => {
  return (
    <div className="card">
      <img className="pic" src={product.picture} />
      <div className="text_container">
        <p className="header">
          {product.id}: {product.name}
        </p>
        <p className="price">{product.price}</p>
      </div>
      <div className="btn">
        <button className="btn_delete" onClick={() => removeItem(product)}>
          delete
        </button>
        <UpdateProduct updateId={updateId} product={product} />
      </div>
    </div>
  );
};

export default Card;
