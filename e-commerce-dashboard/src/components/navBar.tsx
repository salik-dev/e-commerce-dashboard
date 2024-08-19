import React, { useState } from 'react';
// import { Icon } from "@iconify/react";
import { Icon } from '@iconify/react';

function SideBar() {
  return (
    <nav>
      <div className="nav-items flex justify-between p-3 border-gray-200 shadow-md">
        <img src={"./logo192.png"} height={50} width={50} alt="Site logo image" />
        <div className='flex items-center pl-4 gap-4 mr-2'>
          <Icon icon="iconamoon:search-thin" width='1.4rem' height='1.4rem' className='text-gray-400 absolute ml-3' />
          <input type="text" placeholder="Search" className='border h-9 w-80 rounded-md pl-10 focus:outline-none focus:border-2 focus:border-violet-500' />
          <button className='p-2 rounded-full focus:outline-none focus: border-violet-500 focus:ring-2 focus:ring-violet-500'>
            <Icon icon="tdesign:notification" width='1.1rem' height='1.1rem' className='text-gray-400 ' />
          </button>
          <button className='p-2 rounded-full focus:outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-500'>
            <Icon icon="uil:setting" width="1.3em" height="1.3em" className='text-gray-400' />
          </button>
        </div>
      </div>
    </nav>
  );
}

export default SideBar;
