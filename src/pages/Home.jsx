import React, { useState, useContext, useEffect } from 'react';
import { dataContext } from '../Context/UserContext';
import Categories from '../Components/Catagories';
import FoodList from '../Components/FoodList.jsx';
import food_items from '../Data/Food.js';
import Nav from '../Components/Nav.jsx';
import { FaBackspace } from 'react-icons/fa';
import Card2 from '../Components/Card2.jsx';

function Home() {
  const { input, setShowCart, showCart } = useContext(dataContext); // Accessing showCart and setShowCart
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isSearchActive, setIsSearchActive] = useState(false);

  // Check if the input has value or not
  useEffect(() => {
    if (input.trim() !== '') {
      setIsSearchActive(true);
    } else {
      setIsSearchActive(false);
    }
  }, [input]);

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
    <div className='bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#52525b] via-[#a1a1aa] to-[#e4e4e7] min-h-screen'>
      <Nav />
      <div className='px-5 md:px-8'>
        {/* Categories Button - Only Show if Search is Not Active */}
        {!isSearchActive && (
          <div className='flex flex-wrap justify-center gap-4 sm:gap-6 my-6'>
            {Categories.map(category => (
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
                <span>{category.icon}</span>
                <span>{category.name}</span>
              </button>
            ))}
          </div>
        )}

        {/* Food List */}
        <div className='mt-10'>
          <FoodList foodItems={filteredItems} />
        </div>
      </div>

      {/* Cart Section */}
      <div
        className={`w-[40vw] h-[100%] fixed top-0 right-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#52525b] via-[#a1a1aa] to-[#e4e4e7] shadow-xl p-6 ${
          showCart ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 ease-in-out`}
      >
        <header className='flex justify-between items-center'>
          <span className='text-orange-500 text-xl font-semibold'>
            Order items
          </span>
          <FaBackspace
            className='text-[25px] text-orange-500 hover:text-gray-500 cursor-pointer'
            onClick={() => setShowCart(false)} // Hide cart when clicked
          />
        </header>

        <Card2 className=''></Card2>
        <div>{/* Add cart items and content here */}</div>
      </div>
    </div>
  );
}

export default Home;
