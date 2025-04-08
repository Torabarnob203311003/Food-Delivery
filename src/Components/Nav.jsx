import React, { useContext } from 'react';
import { FiSearch } from 'react-icons/fi';
import { BiSolidShoppingBagAlt } from 'react-icons/bi';
import { IoFastFoodOutline } from 'react-icons/io5';
import { dataContext } from '../Context/UserContext';

function Nav() {
  const { input, setInput } = useContext(dataContext);

  return (
    <div className='w-full h-[100px] flex justify-between items-center px-5 md:px-8'>
      {/* Logo */}
      <div className='w-[60px] h-[60px] bg-white flex justify-center items-center rounded-md shadow-xl'>
        <IoFastFoodOutline className='w-[30px] h-[30px] text-orange-500' />
      </div>

      {/* Search Bar */}
      <form
        className='h-[60px] w-full md:w-[70%] flex items-center bg-white px-5 gap-5 rounded-md shadow-md'
        onSubmit={e => e.preventDefault()}
      >
        <FiSearch className='text-orange-500 w-[20px] h-[20px]' />
        <input
          className='w-full outline-none text-[20px]'
          type='text'
          onChange={e => setInput(e.target.value)}
          value={input}
          placeholder='Search Items...'
        />
      </form>

      {/* Cart Icon */}
      <div className='w-[60px] h-[60px] bg-white flex justify-center items-center shadow-xl relative rounded-md'>
        <span className='absolute top-0 right-2 font-bold text-[18px] text-orange-500'>
          0
        </span>
        <BiSolidShoppingBagAlt className='w-[30px] h-[30px] text-orange-500' />
      </div>
    </div>
  );
}

export default Nav;
