import React from 'react';
import Card from './Card';

function FoodList({ foodItems }) {
  return (
    <div className='  p-6 sm:p-8 md:p-10 rounded-xl shadow-sm'>
      <div className='flex flex-wrap justify-center gap-6 transition-all duration-300'>
        {foodItems.length > 0 ? (
          foodItems.map(item => (
            <div
              key={item.id}
              className='transform transition-transform hover:scale-105'
            >
              <Card food={item} />
            </div>
          ))
        ) : (
          <div className='text-gray-500 text-lg font-medium'>
            No food items found matching your search.
          </div>
        )}
      </div>
    </div>
  );
}

export default FoodList;
