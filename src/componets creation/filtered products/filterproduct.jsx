import React, { Component } from 'react';
import axios from 'axios';

class ProductFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      filteredProducts: [],
      categories: [],
      selectedCategory: ''
    };
  }

  componentDidMount() {
    this.fetchProducts();
  }

  // Fetch products from API
  fetchProducts = async () => {
    try {
      const response = await axios.get('https://fakestoreapi.com/products');
      const products = response.data;
      // Extract unique categories from the products
      const categories = [...new Set(products.map(product => product.category))];
      this.setState({
        products: products,
        filteredProducts: products,
        categories: categories
      });
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  // Handle category change from the dropdown
  handleCategoryChange = (event) => {
    const selectedCategory = event.target.value;
    this.setState({ selectedCategory });

    // Filter products based on selected category
    if (selectedCategory === '') {
      this.setState({ filteredProducts: this.state.products });
    } else {
      const filteredProducts = this.state.products.filter(
        product => product.category === selectedCategory
      );
      this.setState({ filteredProducts });
    }
  };

  render() {
    const { categories, filteredProducts, selectedCategory } = this.state;

    return (
      <div>
        <h1>Product Filter</h1>

        {/* Category Dropdown */}
        <label htmlFor="category-select">Filter by category:</label>
        <select id="category-select" value={selectedCategory} onChange={this.handleCategoryChange}>
          <option value="">All</option>
          {categories.map(category => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>

        {/* Display Filtered Products */}
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          {filteredProducts.length > 0 ? (
            filteredProducts.map(product => (
              <div key={product.id} style={{ border: '1px solid #ccc', margin: '10px', padding: '10px', width: '200px' }}>
                <img src={product.image} alt={product.title} style={{ width: '100px', height: '100px' }} />
                <h3>{product.title}</h3>
                <p>Category: {product.category}</p>
                <p>Price: ${product.price}</p>
              </div>
            ))
          ) : (
            <p>No products available</p>
          )}
        </div>
      </div>
    );
  }
}

export default ProductFilter;
