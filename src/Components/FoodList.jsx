import React from 'react';
import food_items from '../Data/Food.js'; // adjust path as needed
import Card from './Card';

function FoodList() {
  return (
    <div className='flex flex-wrap gap-6 justify-center p-6'>
      {food_items.map(item => (
        <Card key={item.id} item={item} />
      ))}
    </div>
  );
}

export default FoodList;
