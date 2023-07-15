import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../../App.css';

const Products = ({ categoryId }) => {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [highlightedItems, setHighlightedItems] = useState([]);

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products`)
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [categoryId]);

  useEffect(() => {
    if (searchQuery === '') {
      setHighlightedItems([]);
    } else {
      const matchingItems = products.filter((product) =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setHighlightedItems(matchingItems);
    }
  }, [searchQuery, products]);

  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="products-container">
      <h2 className="products-heading">Products</h2>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={handleSearchInputChange}
          className="search-input"
        />
      </div>
      <div className="products-grid">
        {products.map((product) => (
          <div
            key={product.id}
            className={`product-card ${highlightedItems.includes(product) ? 'highlighted' : ''}`}
          >
            <div className="product-image">
              <img src={product.image} alt={product.title} />
            </div>
            <div className="product-details">
              <h3 className="product-title">{product.title}</h3>
              <p className="product-price">${product.price.toFixed(2)}</p>
              <p className="product-description">{product.description}</p>
              <button className="product-button">Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
   
    </div>
  );
};

export default Products;