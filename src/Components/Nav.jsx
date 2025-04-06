import React from 'react';
import { FiSearch } from 'react-icons/fi';
import { BiSolidShoppingBagAlt } from 'react-icons/bi';
import { IoFastFoodOutline } from 'react-icons/io5';

function Nav() {
  return (
    <div className=' w-full h-[100px] flex  justify-between items-center px-8'>
      <div className=' w-[60px] h-[60px] bg-white flex justify-center items-center rounded-md shadow-xl '>
        <IoFastFoodOutline className='w-[30px] h-[30px] text-orange-500' />
      </div>
      <form className=' h-[60px] w-[70%]  flex items-center bg-white px-5 gap-5 rounded-md shadow-md'>
        <FiSearch className='text-orange-500 w-[20px] h-[20px] ' />
        <input
          className=' w-[100%] outline-none text-[20px]'
          type='text'
          placeholder='Search Items...'
        />
      </form>

      <div className=' w-[60px] h-[60px] bg-white flex justify-center items-center shadow-xl  relative '>
        <span className=' absolute top-0 right-2 font-bold text-[18px] text-orange-500'>
          {' '}
          0
        </span>
        <BiSolidShoppingBagAlt className='w-[30px] h-[30px] text-orange-500  ' />
      </div>
    </div>
  );
}

export default Nav;
