import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FaTrash } from 'react-icons/fa';
import { removeItem, updateQuantity } from '../Redux/CardSlice.js';

function CartCard() {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.cart);

  const [isFullScreen, setIsFullScreen] = useState(false);

  const handleQuantityChange = (id, newQuantity) => {
    if (newQuantity > 0) {
      dispatch(updateQuantity({ id, quantity: newQuantity }));
    }
  };

  const toggleFullScreen = () => {
    setIsFullScreen(!isFullScreen);
  };

  return (
    <div
      className={`w-full ${
        isFullScreen ? 'fixed inset-0 bg-white z-50 p-4' : ''
      }`}
    >
      {cartItems.length === 0 ? (
        <div className='text-center py-8 w-full sm:w-[90%] md:w-[80%] lg:w-[70%] mx-auto'>
          <h2 className='text-xl text-orange-500 font-semibold'>
            No items in the cart!
          </h2>
          <p className='text-orange-500 mt-2 text-sm'>
            Add some delicious food to your cart.
          </p>
        </div>
      ) : (
        cartItems.map(item => (
          <div
            key={item.id}
            className={`w-full sm:w-[95%] md:w-[90%] lg:w-[80%] bg-white rounded-lg shadow-md flex flex-col sm:flex-row p-4 gap-4 mb-4 sm:h-auto sm:p-4 sm:gap-4 md:h-[140px] md:p-4 lg:h-[150px] lg:p-6 mx-auto ${
              isFullScreen ? 'h-full' : ''
            }`}
          >
            {/* Image */}
            <div className='w-[100px] h-[100px] overflow-hidden rounded-md sm:w-[90px] sm:h-[90px] md:w-[110px] md:h-[110px] lg:w-[120px] lg:h-[120px] mx-auto sm:mx-0'>
              <img
                src={item.image}
                alt={item.name}
                className='w-full h-full object-cover'
              />
            </div>

            {/* Info Section */}
            <div className='flex-1 flex flex-col justify-between h-full'>
              <div className='flex flex-col sm:flex-row sm:justify-between sm:items-start w-full'>
                <div className='w-full'>
                  <h3 className='text-xs sm:text-sm md:text-base lg:text-lg font-semibold text-gray-800 truncate'>
                    {item.name}
                  </h3>
                  <p className='text-xs sm:text-xs md:text-sm lg:text-sm text-gray-500'>
                    Delicious food item
                  </p>
                </div>
                <span className='text-orange-500 font-bold text-xs sm:text-sm md:text-base lg:text-lg'>
                  BDT {item.price} Tk
                </span>
              </div>

              {/* Quantity and Remove */}
              <div className='flex justify-between items-center mt-2 sm:mt-3 md:mt-2 lg:mt-3'>
                <div className='flex items-center gap-2'>
                  <button
                    className='px-2 py-1 bg-gray-200 rounded hover:bg-gray-300 text-xs sm:text-sm md:text-base lg:text-base'
                    onClick={() =>
                      handleQuantityChange(item.id, item.quantity - 1)
                    }
                  >
                    -
                  </button>
                  <span className='text-xs sm:text-sm md:text-base lg:text-base'>
                    {item.quantity}
                  </span>
                  <button
                    className='px-2 py-1 bg-gray-200 rounded hover:bg-gray-300 text-xs sm:text-sm md:text-base lg:text-base'
                    onClick={() =>
                      handleQuantityChange(item.id, item.quantity + 1)
                    }
                  >
                    +
                  </button>
                </div>
                <FaTrash
                  className='text-red-500 cursor-pointer hover:text-red-700 text-sm sm:text-lg md:text-xl lg:text-2xl'
                  onClick={() => dispatch(removeItem(item.id))}
                />
              </div>
            </div>
          </div>
        ))
      )}

      {/* Button to toggle full-screen */}
      <button
        className='fixed bottom-4 right-4 p-3 bg-orange-500 text-white rounded-full sm:hidden md:hidden lg:hidden'
        onClick={toggleFullScreen}
      >
        {isFullScreen ? 'Close Cart' : 'Open Cart'}
      </button>
    </div>
  );
}

export default CartCard;
