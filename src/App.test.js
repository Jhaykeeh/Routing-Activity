import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import CategoryPage from './ecommerce/CategoryPage';

test('renders ecommerce products for a selected category', () => {
  render(
    <MemoryRouter initialEntries={['/ecommerce/category/electronics']}>
      <Routes>
        <Route path="/ecommerce/category/:categoryName" element={<CategoryPage />} />
      </Routes>
    </MemoryRouter>
  );

  expect(screen.getByText(/Electronics Collection/i)).toBeInTheDocument();
  expect(screen.getByText(/MacBook Air/i)).toBeInTheDocument();
});
