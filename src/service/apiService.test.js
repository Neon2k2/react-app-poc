import apiService from './apiService.js';
const fetchMock = require('fetch-mock/es5/client');

describe('apiService', () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it('fetches products from the API', async () => {
    const products = [{
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
  ];

    // Mock the network request
    fetchMock.get('https://fakestoreapi.com/products', {
      status: 200,
      body: products,
    });

    const result = await apiService.fetchProducts();
    expect(result).toEqual(products);
  });
});
