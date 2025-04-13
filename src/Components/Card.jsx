import React, { useState } from 'react';
import { RiLeafLine } from 'react-icons/ri';
import { GiMeat } from 'react-icons/gi';
import { useDispatch } from 'react-redux';
import { addItem } from '../Redux/CardSlice.js';
import { toast } from 'react-toastify'; // <-- Import toast
import 'react-toastify/dist/ReactToastify.css';

function Card({ food }) {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = e => {
    const value = e.target.value;
    if (value > 0) setQuantity(value);
  };

  return (
    <div className='w-full sm:w-[280px] md:w-[300px] lg:w-[350px] xl:w-[400px] h-auto bg-white p-6 rounded-xl flex flex-col gap-4 shadow-lg hover:shadow-xl hover:shadow-orange-500 transition-shadow duration-300'>
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

      {/* Quantity Input */}
      <div className='flex justify-between items-center'>
        <input
          type='number'
          value={quantity}
          onChange={handleQuantityChange}
          min='1'
          className='w-[80px] p-2 border rounded-md text-center'
        />
      </div>

      {/* Add to Cart Button */}
      <button
        className='w-full mt-2 mb-1 p-3 bg-orange-500 rounded-xl text-lg sm:text-base text-white hover:bg-yellow-100 hover:text-orange-500 font-semibold transition-all duration-300'
        onClick={() => {
          dispatch(
            addItem({
              id: food.id,
              name: food.food_name,
              price: food.price,
              image: food.food_image,
              quantity,
            })
          );
          toast.success('Dish Added');
        }}
      >
        Add to Dish
      </button>
    </div>
  );
}

export default Card;
