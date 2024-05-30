import React from "react";
import { useNavigate } from "react-router-dom";

export default function ProductCard({ product }) {
  console.log(product);
  const navigation = useNavigate();

  const handleClick = (product, Index = 0) => {
    if (product) {
      const images = product.image.split("").splice(7).join("");
      navigation(
        `/Sophia/Shopping/v1/productView/${product.name}/${
          product.price
        }/${"des"}/${images}/${"Men"}/${"TSHIRT"}`
      );
    } else {
      navigation(`/Nexify/shopping/v1/homepage`);
    }
  };

  return (
    <>
      <div className="Product_Card_Container">
        {product.map((items, index) => (
          <div onClick={() => handleClick(items, index)} key={index}>
            <img
              src={items.signedUrl[0]}
              alt={items.name}
              className="image_card_Product"
            />
            <p className="product-name">{items.productName}</p>
            <p className="product_price">Price: {items.productPrice}</p>
          </div>
        ))}
      </div>
    </>
  );
}
