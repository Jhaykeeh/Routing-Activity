import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import CategoryPage from './CategoryPage';
import './ecommerce.css';

function EcommerceApp() {
  return (
    <Routes>
      <Route path="" element={<Navigate to="category/electronics" replace />} />
      <Route path="category/:categoryName" element={<CategoryPage />} />
    </Routes>
  );
}

export default EcommerceApp;
