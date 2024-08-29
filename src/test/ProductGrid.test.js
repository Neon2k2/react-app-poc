import React from 'react';
import { screen, render, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import ProductsGrid from '../Components/products/ProductsGrid';

describe('ProductsGrid Component', () => {
  test('clicking "Create Product" button navigates to /createproductform', async() => {
    await render(
      <Router>
        <ProductsGrid products={[]} />
      </Router>
    );

    const createProductButton = screen.getByText('Create Product');
    fireEvent.click(createProductButton);

    expect(window.location.pathname).toBe('/createproductform');
  });

  test('clicking "Product table view" button navigates to /producttableview', async() => {
    await render(
      <Router>
        <ProductsGrid products={[]} />
      </Router>
    );

    const tableViewButton = screen.getByText('Product table view');
    fireEvent.click(tableViewButton);

    expect(window.location.pathname).toBe('/producttableview');
  });

  test('displays "No Data Found" message when there are no products', async() => {
    await render(
      <Router>
        <ProductsGrid products={[]} />
      </Router>
    );

    const noDataMessage = screen.getByText('No Data Found');
    expect(noDataMessage).toBeInTheDocument();
  });
});
