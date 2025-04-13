import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FaTrash } from 'react-icons/fa';
import { removeItem, updateQuantity, clearCart } from '../Redux/CardSlice.js';

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

  const deliveryFee = 20;
  const vat = totalPrice * 0.05; // 5% VAT
  const finalTotal = totalPrice + vat + deliveryFee;

  const handlePlaceOrder = () => {
    const confirmed = window.confirm(
      'Are you sure you want to place the order?'
    );
    if (confirmed) {
      alert('Order placed successfully!');
      dispatch(clearCart());
    }
  };

  return (
    <div className='w-full h-screen flex flex-col'>
      {/* Scrollable Cart Section */}
      <div className='flex-1 overflow-y-auto pb-36 w-full mt-3'>
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
              className='w-[90%] sm:w-[80%] md:w-[75%] lg:w-[60%] bg-white rounded-xl shadow-md flex flex-col sm:flex-row p-2 gap-3 mb-4 mx-auto transition-transform hover:scale-[1.02] sm:hover:scale-[1.03]'
            >
              {/* Image */}
              <div className='w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] md:w-[90px] md:h-[90px] lg:w-[100px] lg:h-[100px] overflow-hidden rounded-md mx-auto sm:mx-0'>
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

                  <span className='bg-gradient-to-r from-orange-200 to-yellow-100 text-orange-700 font-bold text-sm sm:text-base md:text-lg px-3 py-1 rounded-full shadow-md border border-orange-300 mt-1 sm:mt-0'>
                    ৳ {item.price.toLocaleString()}
                  </span>
                </div>

                {/* Quantity and Remove */}
                <div className='flex justify-between items-center mt-3'>
                  <div className='flex items-center gap-1'>
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

                  <div className='ml-2'>
                    <FaTrash
                      className='text-red-500 cursor-pointer hover:text-red-700 text-lg'
                      onClick={() => dispatch(removeItem(item.id))}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Sticky Total Price Section */}
      {cartItems.length > 0 && (
        <div className='w-full fixed bottom-0 left-0 bg-white shadow-lg border-t border-gray-300 p-4 z-10'>
          <div className='w-[95%] sm:w-[90%] md:w-[85%] lg:w-[70%] mx-auto flex flex-col sm:flex-row justify-between items-center gap-4'>
            {/* Total Section */}
            <div className='flex flex-col gap-3 w-full'>
              {/* Subtotal */}
              <div className='flex justify-between items-center'>
                <h3 className='text-xs sm:text-sm md:text-base font-semibold text-gray-800'>
                  Subtotal
                </h3>
                <span className='bg-gradient-to-r from-orange-100 to-yellow-50 text-orange-500 font-bold text-sm sm:text-lg px-4 py-2 rounded-full shadow-md'>
                  ৳ {totalPrice.toFixed(2)}
                </span>
              </div>

              {/* Delivery Fee */}
              <div className='flex justify-between items-center'>
                <h3 className='text-xs sm:text-sm md:text-base font-semibold text-gray-800'>
                  Delivery Fee
                </h3>
                <span className='bg-gradient-to-r from-orange-200 to-yellow-100 text-orange-700 font-bold text-sm sm:text-lg px-4 py-2 rounded-full shadow-md'>
                  ৳ {deliveryFee}
                </span>
              </div>

              {/* VAT */}
              <div className='flex justify-between items-center'>
                <h3 className='text-xs sm:text-sm md:text-base font-semibold text-gray-800'>
                  VAT (5%)
                </h3>
                <span className='bg-gradient-to-r from-orange-100 to-yellow-50 text-orange-500 font-bold text-sm sm:text-lg px-4 py-2 rounded-full shadow-md'>
                  ৳ {vat.toFixed(2)}
                </span>
              </div>
            </div>

            {/* Final Total */}
            <div className='flex justify-between items-center w-full mt-3'>
              <h3 className='text-xs sm:text-sm md:text-base font-semibold text-gray-800'>
                Final Total
              </h3>
              <span className='bg-gradient-to-r from-orange-100 to-yellow-50 text-orange-500 font-bold text-sm sm:text-lg px-4 py-2 rounded-full shadow-md'>
                ৳ {finalTotal.toFixed(2)}
              </span>
            </div>
          </div>

          {/* Place Order Button */}
          <button
            onClick={handlePlaceOrder}
            className='w-full bg-gradient-to-r from-orange-500 to-yellow-400 hover:from-orange-600 hover:to-yellow-500 text-white font-semibold text-sm sm:text-base md:text-lg px-4 py-2 rounded-full shadow-md transition duration-300 mt-4 flex justify-center items-center'
          >
            Place Order
          </button>
        </div>
      )}
    </div>
  );
}

export default CartCard;
