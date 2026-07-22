import React from 'react';

function ProductItem({ product }) {
  return (
    <article className="product-card">
      <img className="product-image" src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>${product.price.toFixed(2)}</p>
    </article>
  );
}

export default ProductItem;
