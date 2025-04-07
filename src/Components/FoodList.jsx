import React from 'react';
import Card from './Card'; // Assuming you have a Card component to display each food item

function FoodList({ foodItems }) {
  return (
    <div className='flex flex-wrap justify-center gap-6'>
      {foodItems.length > 0 ? (
        foodItems.map(item => <Card key={item.id} food={item} />)
      ) : (
        <div>No food items found in this category.</div>
      )}
    </div>
  );
}

export default FoodList;
