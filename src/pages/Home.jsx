import React, { useState, useContext } from 'react';
import { dataContext } from '../Context/UserContext';
import FoodList from '../Components/FoodList.jsx';
import food_items from '../Data/Food.js';
import Nav from '../Components/Nav.jsx';

function Home() {
  const { input } = useContext(dataContext); // Access input from context
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Filter food items based on selected category and input search
  const filteredItems = food_items.filter(item => {
    const matchesCategory =
      selectedCategory === 'All' ||
      item.food_category.toLowerCase() === selectedCategory.toLowerCase();
    const matchesSearch = item.food_name
      .toLowerCase()
      .includes(input.toLowerCase()); // Match food name with search input

    return matchesCategory && matchesSearch;
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
                    ? 'bg-yellow-200 text-gray-500 font-semibold shadow-md'
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
