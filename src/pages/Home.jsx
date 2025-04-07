import React, { useState } from 'react';
import Catagories from '../Components/Catagories';
import FoodList from '../Components/FoodList.jsx';
import food_items from '../Data/Food.js';
import Nav from '../Components/Nav.jsx';

function Home() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredItems = food_items.filter(item => {
    if (selectedCategory === 'All') return true;
    return item.food_category.toLowerCase() === selectedCategory.toLowerCase();
  });

  return (
    <div>
      <Nav />
      <div>
        <div className='flex justify-center gap-6 mb-6'>
          {Catagories.map(category => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.name)}
              className='flex items-center gap-2 p-4 hover:bg-gray-200 rounded-lg'
            >
              {category.icon}
              <span>{category.name}</span>
            </button>
          ))}
        </div>

        {/* Food List */}
        <div className='mt-10'>
          <FoodList foodItems={filteredItems} />{' '}
        </div>
      </div>
    </div>
  );
}

export default Home;
