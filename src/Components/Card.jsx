import React from 'react';
import { RiLeafLine } from 'react-icons/ri';
import { GiMeat } from 'react-icons/gi';
import { useDispatch } from 'react-redux';
import { AddItem } from '../Redux/CardSlice.js'; // 🔁 Adjust the path to your slice

function Card({ food }) {
  const dispatch = useDispatch();

  return (
    <div className='w-full sm:w-[300px] md:w-[350px] lg:w-[400px] xl:w-[450px] h-auto bg-white p-4 rounded-2xl flex flex-col gap-4 shadow-md hover:shadow-xl hover:shadow-orange-400 transition-shadow duration-300'>
      {/* Image */}
      <div className='w-full h-[220px] sm:h-[240px] md:h-[260px] lg:h-[280px] xl:h-[300px] overflow-hidden rounded-xl'>
        <img
          src={food.food_image}
          alt={food.food_name}
          className='object-cover w-full h-full transform hover:scale-105 transition-transform duration-300'
        />
      </div>

      {/* Title */}
      <div className='text-xl sm:text-2xl font-bold text-gray-800 tracking-wide'>
        {food.food_name}
      </div>

      {/* Price & Type */}
      <div className='w-full flex justify-between items-center'>
        <div className='text-lg sm:text-xl font-semibold text-orange-500'>
          BDT {food.price} Tk
        </div>
        <div className='flex items-center text-lg sm:text-xl font-medium'>
          {food.food_type === 'veg' ? (
            <>
              <RiLeafLine className='text-green-600 mr-1' />
              <span className='text-green-600'>Veg</span>
            </>
          ) : (
            <>
              <GiMeat className='text-red-600 mr-1' />
              <span className='text-red-600'>Non-Veg</span>
            </>
          )}
        </div>
      </div>

      {/* Add to Cart Button */}
      <button
        className='w-full mt-2 mb-1 p-3 bg-orange-500 rounded-xl text-lg sm:text-base text-white hover:bg-yellow-100 hover:text-orange-500 font-semibold transition-all duration-300'
        onClick={() => dispatch(AddItem(food))}
      >
        Add to Dish
      </button>
    </div>
  );
}

export default Card;
