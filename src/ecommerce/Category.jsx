import React from 'react';
import ProductList from './ProductList';

function Category({ category }) {
  return <ProductList products={category.products} />;
}

export default Category;
