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
    <div className='bg-gradient-to-bl from-[#edd2f3] via-[#fffcdc] to-[#84dfff] min-h-screen'>
      <Nav />
      <div className='px-5 md:px-8'>
        {/* Category Buttons */}
        <div className='flex flex-wrap justify-center gap-4 sm:gap-6 my-6'>
          {Catagories.map(category => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.name)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full border transition-all duration-300
                ${
                  selectedCategory === category.name
                    ? 'bg-orange-200 text-gray-500 font-semibold shadow-md'
                    : 'bg-white text-gray-700 hover:bg-orange-100 hover:text-orange-600'
                }
                text-sm md:text-base`}
            >
              {category.icon}
              <span>{category.name}</span>
            </button>
          ))}
        </div>

        {/* Food List */}
        <div className='mt-10'>
          <FoodList foodItems={filteredItems} />
        </div>
      </div>
    </div>
  );
}

export default Home;
