import { CiMenuBurger } from 'react-icons/ci';
import { MdFreeBreakfast } from 'react-icons/md';
import { LuSoup } from 'react-icons/lu';
import { CiBowlNoodles } from 'react-icons/ci';
import { FaBurger } from 'react-icons/fa6';
import { FaPizzaSlice } from 'react-icons/fa6';

const Catagories = [
  {
    id: 1,
    name: 'All ',
    icon: <CiMenuBurger className='w-[60px] h-[60px] text-orange-500' />,
  },
  {
    id: 2,
    name: 'Breakfast  ',
    icon: <MdFreeBreakfast className='w-[60px] h-[60px] text-orange-500' />,
  },
  {
    id: 3,
    name: 'Soup ',
    icon: <LuSoup className='w-[60px] h-[60px] text-orange-500' />,
  },
  {
    id: 4,
    name: 'Noodles ',
    icon: <CiBowlNoodles className='w-[60px] h-[60px] text-orange-500' />,
  },
  {
    id: 5,
    name: 'Burger ',
    icon: <FaBurger className='w-[60px] h-[60px] text-orange-500' />,
  },
  {
    id: 6,
    name: 'Pizza ',
    icon: <FaPizzaSlice className='w-[60px] h-[60px] text-orange-500' />,
  },
  {
    id: 7,
    name: 'Desert ',
    icon: <CiMenuBurger className='w-[60px] h-[60px] text-orange-500' />,
  },
];
export default Catagories;
