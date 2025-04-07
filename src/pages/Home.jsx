import React from 'react';
import Nav from '../Components/Nav';
import Catagories from '../Components/Catagories';

import FoodList from '../Components/FoodList';

function Home() {
  return (
    <div className='bg-gradient-to-bl from-[#ffe4e6] to-[#ccfbf1] w-full min-h-[100vh]'>
      <Nav />

      <div className='flex flex-wrap justify-center items-center gap-6 w-[100%]'>
        {Catagories.map(item => (
          <div
            key={item.name}
            className='w-[150px] h-[150px] bg-white flex flex-col items-start gap-5 p-5 justify-start text-[20px] font-semibold text-gray-500 rounded-lg shadow-lg hover:bg-yellow-100 cursor-pointer transition-all duration-200'
          >
            {item.icon}
            {item.name}
          </div>
        ))}
      </div>
      <FoodList />
    </div>
  );
}

export default Home;
