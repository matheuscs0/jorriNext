'use client'
import { HandlesSideBar } from '@/hooks/SideBar';
import {AiOutlineClose} from 'react-icons/ai'

function Cart() {
  const { handleCloseCart } = HandlesSideBar();

  return (
    <div className='w-[300px] h-full bg-neutral-950 text-white top-24 absolute z-50 right-0'>
      <div className="w-full h-full bg-red">
        <button className='p-4'><AiOutlineClose onClick={handleCloseCart}/></button>
      </div>
      <ul>
        oi
      </ul>
    </div>
  );
}

export default Cart;

