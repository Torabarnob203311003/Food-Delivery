import React from 'react';
import { RiLeafLine } from 'react-icons/ri';

function Card({ item }) {
  return (
    <div className='w-[300px] h-[400px] bg-white p-4 rounded-lg flex flex-col gap-3 shadow-lg'>
      <div className='w-full h-[60%] overflow-hidden'>
        <img
          src={item.food_image}
          alt={item.food_name}
          className='object-cover w-full h-full rounded-md'
        />
      </div>
      <div className='text-2xl font-semibold'>{item.food_name}</div>
      <div className='w-full flex justify-between items-center'>
        <div className='text-lg font-semibold text-orange-500'>
          BDT {item.price} Tk
        </div>
        <div className='flex items-center text-lg font-medium'>
          <RiLeafLine
            className={`mr-1 ${
              item.food_type === 'veg' ? 'text-green-600' : 'text-red-600'
            }`}
          />
          <span
            className={`${
              item.food_type === 'veg' ? 'text-green-600' : 'text-red-600'
            }`}
          >
            {item.food_type === 'veg' ? 'Veg' : 'Non-Veg'}
          </span>
        </div>
      </div>
      <button className='w-full p-3 bg-orange-500 rounded-xl text-xl text-white hover:bg-yellow-100 hover:text-orange-500 font-semibold transition-all'>
        Add to Dish
      </button>
    </div>
  );
}

export default Card;
