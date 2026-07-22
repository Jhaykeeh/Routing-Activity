import React from 'react';
import { useParams, NavLink } from 'react-router-dom';
import Category from './Category';
import categories from './data';

function CategoryPage() {
  const { categoryName } = useParams();
  const selectedCategory = categoryName || 'electronics';
  const category = categories.find((item) => item.name === selectedCategory) || categories[0];
  const products = category.products;

  return (
    <div className="catalog-shell">
      <header className="catalog-header">
        <div>
          <p className="catalog-eyebrow">Storefront</p>
          <h1>{category.label} Collection</h1>
        </div>
        <nav className="catalog-nav">
          {categories.map((item) => (
            <NavLink
              key={item.name}
              to={`/ecommerce/category/${item.name}`}
              className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </header>

      <main className="catalog-main">
        <Category category={{ ...category, products }} />
      </main>
    </div>
  );
}

export default CategoryPage;
