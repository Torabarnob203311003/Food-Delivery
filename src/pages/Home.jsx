import React from 'react';
import Nav from '../Components/Nav';
import Catagories from '../Components/Catagories';

function Home() {
  return (
    <div className=' bg-white w-full min-h-[100vh]'>
      <Nav />

      <div className=' flex flex-wrap justify-center items-center gap-6 w-[100%]'>
        {Catagories.map(item => {
          return (
            <div className=' w-[150px] h-[150px ] bg-white flex  flex-col items-start gap-5 p-5 justify-start text-[20px] font-semibold text-gray-500 rounded-lg shadow-lg hover:bg-yellow-100  cursor-pointer  transition-all duration-200 '>
              {item.icon}
              {item.name}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Home;
