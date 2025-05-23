import React, { useContext } from 'react';
import { FiSearch } from 'react-icons/fi';
import { BiSolidShoppingBagAlt } from 'react-icons/bi';
import { IoFastFoodOutline } from 'react-icons/io5';
import { dataContext } from '../Context/UserContext';
import { useSelector } from 'react-redux';

function Nav() {
  const { input, setInput, setShowCart } = useContext(dataContext); // Accessing setShowCart
  const cart = useSelector(state => state.cart.cart); // Accessing the cart state

  return (
    <div className='w-full h-[100px] flex justify-between items-center px-5 md:px-8'>
      {/* Logo */}
      <div className='w-[60px] h-[60px] bg-white flex justify-center items-center rounded-md shadow-xl'>
        <IoFastFoodOutline className='w-[30px] h-[30px] text-orange-500' />
      </div>

      {/* Search Bar */}
      <form
        className='h-[50px] w-[50%] sm:w-[60%] md:w-[70%] flex items-center bg-white px-3 sm:px-4 gap-2 rounded-md shadow-md'
        onSubmit={e => e.preventDefault()}
      >
        <FiSearch className='text-orange-500 w-[16px] h-[16px]' />
        <input
          className='w-full outline-none text-[16px] sm:text-[18px]'
          type='text'
          onChange={e => setInput(e.target.value)}
          value={input}
          placeholder='Search Items...'
        />
      </form>

      {/* Cart Icon */}
      <div
        className='w-[60px] h-[60px] bg-white flex justify-center items-center shadow-xl relative rounded-md'
        onClick={() => setShowCart(true)} // Show cart when clicked
      >
        {cart.length > 0 && (
          <span className='absolute top-0 right-2 font-bold text-[18px] text-orange-500'>
            {cart.length}
          </span>
        )}
        <BiSolidShoppingBagAlt className='w-[24px] h-[24px] text-orange-500' />
      </div>
    </div>
  );
}

export default Nav;
