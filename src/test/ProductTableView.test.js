import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ProductTableView from '../Components/ProductTableView';
import apiService from '../service/apiService'

jest.mock('../service/apiService');

const mockProducts =[
  {
    id: 1,
    image: 'https://fakestoreapi.com/img/1.jpg',
    title: 'Fjallraven - Foldsack No. 1 Backpack',
    category: 'men clothing',
    description: 'Your perfect pack for everyday use and walks in the forest.',
    price: 109.95,
    rating: {
      rate: 4.3,
      count: 120,
    },
  },
  // Add more mock product data if needed
];

describe('ProductTableView', () => {
  beforeEach(() => {
    apiService.fetchProducts.mockResolvedValue(mockProducts);
    render(<ProductTableView />);
  });

  it('renders product table correctly with pagination', async () => {
    // Check if the table headers are rendered
    expect(screen.getByText('#')).toBeInTheDocument();
    expect(screen.getByText('Image')).toBeInTheDocument();
    expect(screen.getByText('Title')).toBeInTheDocument();
    expect(screen.getByText('Category')).toBeInTheDocument();
    expect(screen.getByText('Description')).toBeInTheDocument();
    expect(screen.getByText('Price')).toBeInTheDocument();
    expect(screen.getByText('Rate')).toBeInTheDocument();
    expect(screen.getByText('Count')).toBeInTheDocument();

    // Check if the initial page of products is rendered
    await waitFor(() => {
      expect(screen.getByText(mockProducts[0].description)).toBeInTheDocument();
    });

    // Check if pagination items are rendered and clickable
    const paginationItems = screen.getAllByTestId('pagination-item');
    expect(paginationItems.length).toBeGreaterThan(0);
    paginationItems.forEach((item, index) => {
      expect(item).toHaveTextContent((index + 1).toString());
    });

  });
});
