
const BASE_URL = 'https://fakestoreapi.com/products'; 

const apiService = {
  async fetchProducts() {
    const response = await fetch(`${BASE_URL}`);
    return response.json();
  },
  
  async fetchProductsById(productId) {   
    const response = await fetch(`${BASE_URL}/${productId}`);   
    return response.json(); 
  }
};

export default apiService;