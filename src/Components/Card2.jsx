import React from 'react';
import image1 from '../assets/image1.avif';
import { FaTrash } from 'react-icons/fa';

function CartCard() {
  return (
    <div className='w-full h-[120px] bg-white rounded-lg shadow-md flex items-center p-4 gap-4'>
      {/* Image */}
      <div className='w-[100px] h-[100px] overflow-hidden rounded-md'>
        <img
          src={image1}
          alt='Cart Item'
          className='w-full h-full object-cover'
        />
      </div>

      {/* Info Section */}
      <div className='flex-1 flex flex-col justify-between h-full'>
        <div className='flex justify-between items-start'>
          <div>
            <h3 className='text-lg font-semibold text-gray-800'>Pancake</h3>
            <p className='text-sm text-gray-500'>Delicious fluffy pancakes</p>
          </div>
          <span className='text-orange-500 font-bold'>BDT 499TK</span>
        </div>

        {/* Quantity and Remove */}
        <div className='flex justify-between items-center mt-2'>
          <div className='flex items-center gap-2'>
            <button className='px-2 py-1 bg-gray-200 rounded hover:bg-gray-300'>
              -
            </button>
            <span>1</span>
            <button className='px-2 py-1 bg-gray-200 rounded hover:bg-gray-300'>
              +
            </button>
          </div>
          <FaTrash className='text-red-500 cursor-pointer hover:text-red-700' />
        </div>
      </div>
    </div>
  );
}

export default CartCard;
