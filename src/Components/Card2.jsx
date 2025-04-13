import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FaTrash } from 'react-icons/fa';
import { removeItem, updateQuantity } from '../Redux/CardSlice.js';

function CartCard() {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.cart);

  const handleQuantityChange = (id, newQuantity) => {
    if (newQuantity > 0) {
      dispatch(updateQuantity({ id, quantity: newQuantity }));
    }
  };

  const totalPrice = cartItems.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  const handlePlaceOrder = () => {
    alert('Order placed successfully!');
    // You can redirect, clear cart, or do other actions here
  };

  return (
    <div className='w-full h-screen flex flex-col bg-gray-50'>
      {/* Scrollable Cart Section */}
      <div className='flex-1 overflow-y-auto pb-44'>
        {cartItems.length === 0 ? (
          <div className='text-center py-8 w-[90%] sm:w-[85%] md:w-[80%] lg:w-[70%] mx-auto'>
            <h2 className='text-lg sm:text-xl text-orange-500 font-semibold'>
              No items in the cart!
            </h2>
            <p className='text-sm sm:text-base text-orange-500 mt-2'>
              Add some delicious food to your cart.
            </p>
          </div>
        ) : (
          cartItems.map(item => (
            <div
              key={item.id}
              className='w-[95%] sm:w-[90%] md:w-[85%] lg:w-[70%] bg-white rounded-xl shadow-md flex flex-col sm:flex-row p-3 gap-3 mb-4 mx-auto transition-transform hover:scale-[1.01]'
            >
              {/* Image */}
              <div className='w-[80px] h-[80px] sm:w-[90px] sm:h-[90px] md:w-[110px] md:h-[110px] lg:w-[120px] lg:h-[120px] overflow-hidden rounded-md mx-auto sm:mx-0'>
                <img
                  src={item.image}
                  alt={item.name}
                  className='w-full h-full object-cover'
                />
              </div>

              {/* Info Section */}
              <div className='flex-1 flex flex-col justify-between'>
                <div className='flex flex-col sm:flex-row sm:justify-between sm:items-start w-full'>
                  <div className='w-full'>
                    <h3 className='text-sm sm:text-base md:text-lg font-semibold text-gray-800 line-clamp-2 break-words overflow-hidden'>
                      {item.name}
                    </h3>
                    <p className='text-xs sm:text-sm md:text-sm text-gray-500'>
                      Delicious food item
                    </p>
                  </div>

                  {/* Styled Price */}
                  <span className='bg-gradient-to-r from-orange-200 to-yellow-100 text-orange-700 font-bold text-sm sm:text-base md:text-lg px-4 py-1 rounded-full shadow-md border border-orange-300 mt-1 sm:mt-0'>
                    ৳ {item.price}
                  </span>
                </div>

                {/* Quantity and Remove */}
                <div className='flex justify-between items-center mt-3'>
                  <div className='flex items-center gap-2'>
                    <button
                      className='px-2 py-1 bg-gray-200 rounded hover:bg-gray-300 text-sm'
                      onClick={() =>
                        handleQuantityChange(item.id, item.quantity - 1)
                      }
                    >
                      -
                    </button>
                    <span className='text-sm'>{item.quantity}</span>
                    <button
                      className='px-2 py-1 bg-gray-200 rounded hover:bg-gray-300 text-sm'
                      onClick={() =>
                        handleQuantityChange(item.id, item.quantity + 1)
                      }
                    >
                      +
                    </button>
                  </div>
                  <FaTrash
                    className='text-red-500 cursor-pointer hover:text-red-700 text-lg'
                    onClick={() => dispatch(removeItem(item.id))}
                  />
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Sticky Total Price Section */}
      {cartItems.length > 0 && (
        <div className='w-full fixed bottom-0 left-0 bg-white shadow-inner border-t border-gray-300 p-4 z-10'>
          <div className='w-[95%] sm:w-[90%] md:w-[85%] lg:w-[70%] mx-auto flex flex-col sm:flex-row justify-between items-center gap-4'>
            <div className='flex flex-col sm:flex-row sm:items-center gap-3'>
              <h3 className='text-sm sm:text-base md:text-lg font-semibold text-gray-800'>
                Total Price
              </h3>
              <span className='bg-orange-100 text-orange-600 font-bold text-lg sm:text-xl px-4 py-2 rounded-full shadow-sm border border-orange-300'>
                ৳ {totalPrice.toFixed(2)}
              </span>
            </div>

            <button
              onClick={handlePlaceOrder}
              className='bg-gradient-to-r from-orange-400 to-yellow-300 hover:from-orange-500 hover:to-yellow-400 text-white font-semibold text-sm sm:text-base md:text-lg px-4 sm:px-6 py-2 rounded-full shadow-md transition duration-300 mt-4 sm:mt-0'
            >
              Place Order
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default CartCard;
