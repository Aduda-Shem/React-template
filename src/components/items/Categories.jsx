import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../../App.css';
import Products from './Products';

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = () => {
    axios
      .get('https://api.escuelajs.co/api/v1/categories')
      .then((response) => {
        setCategories(response.data);
      })
      .catch((error) => {
        console.error('Error fetching categories:', error);
      });
  };

  const onSelectCategory = (categoryId) => {
    setSelectedCategoryId(categoryId);
    navigate(`/products/${categoryId}`);
  };

  return (
    <div className="categories">
      <h2>Categories</h2>
      <div className="category-list">
        {categories.map((category) => (
          <div
            key={category.id}
            className={`category ${selectedCategoryId === category.id ? 'active' : ''}`}
            onClick={() => onSelectCategory(category.id)}
          >
            <img src={category.image} alt={category.name} />
            <span className="category-name">{category.name}</span>
          </div>
        ))}
      </div>
      {selectedCategoryId && <Products categoryId={selectedCategoryId} />}
    </div>
  );
};

export default Categories;