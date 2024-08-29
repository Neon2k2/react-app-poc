import React from 'react';
import { render, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom'; // Import MemoryRouter
import configureStore from 'redux-mock-store';
import ProductList from '../Components/ProductList';
import thunk from 'redux-thunk';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn(),
}));

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('ProductList Component', () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      allProducts: {
        products: [
            {
                id: 1,
                image: 'https://example.com/image1.jpg',
                title: 'Product 1',
                category: 'Category 1',
                description: 'Description for product 1',
                price: 10.99,
                count: 5,
                rating: {
                  rate: 4.5,
                  count: 10,
                },
              },
              {
                id: 2,
                image: 'https://example.com/image2.jpg',
                title: 'Product 2',
                category: 'Category 2',
                description: 'Description for product 2',
                price: 15.99,
                count: 3,
                rating: {
                  rate: 3.8,
                  count: 8,
                },
              },
        ],
      },
    });
  });

  it('renders ProductList component with products', async () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <MemoryRouter>
          <ProductList />
        </MemoryRouter>
      </Provider>
    );

    await waitFor(() => {
      const productList = getByTestId('product-list');
      expect(productList).toBeInTheDocument();
      expect(productList.children.length).toBe(2); // Assuming there are 3 products in the mock store
    });
  });
});
