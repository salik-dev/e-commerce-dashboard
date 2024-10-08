import { useState } from 'react';
import { Icon } from '@iconify/react';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { Link, Outlet } from 'react-router-dom';

function SideBar() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [toggle, setToggle] = useState("humburger");
  const [width, setWidth] = useState(0);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  window.addEventListener('resize', () => {
    console.log('width', window.innerWidth);
    setWidth(window.innerWidth);
  })

  let itemsStyles = `flex items-center pl-4 gap-3 mr-2`;
  const openHandler = () => {
    setToggle('cross');
  }
  const closeHandler = () => {
    // itemsStyles = `block absolute top-[86px] pl-0`;
    setToggle("humburger");
  }

  return (
    <>
      <div className="h-[100vh] flex flex-col">
        <div className="nav-container flex justify-around items-center px-4 border-gray-200 shadow-md h-[70px]">
          <img src={"./logo.png"} height={110} width={110} alt="Site logo image" />

          {/* nav-bar toggler logics ( can be reFactored) */}
          <span>
            {toggle === 'humburger' && <Icon icon="iconamoon:menu-burger-horizontal-thin" width="1.3em" height="1.3em" className='humburger-icon mr-4' onClick={openHandler} />}
            {toggle === 'cross' && <Icon icon="system-uicons:cross" width="1.3em" height="1.3em" className='cross-icon mr-4' onClick={closeHandler} />}
          </span>

          {/* <div className={`flex items-center ${width > 600 && toggle != 'humburger' ? 'flex items-center pl-4 gap-3' : toggle === 'cross' && 'block absolute top-[86px] pl-0'}`}> */}
          <nav>
            <ul className='flex gap-6'>
              <li>
                <Link to="/" className='text-sm tracking-wider text-gray-400 font-semibold'>Home</Link>
              </li>
              <li>
                <Link to="/about" className='text-sm text-gray-400 tracking-wider font-semibold'>About</Link>
              </li>
              <li>
                <Link to="/contact" className='text-sm text-gray-400 tracking-wider font-semibold'>Contact</Link>
              </li>
              <li>
                <Link to="/checkout" className='text-sm text-gray-400 tracking-wider font-semibold'>Checkout</Link>
              </li>
            </ul>
          </nav>
          <div className='flex'>
            <div className="search-button flex items-center">
              <Icon icon="iconamoon:search-thin" width='1.4rem' height='1.4rem' className='text-gray-400 absolute ml-3' />
              <input type="search" placeholder="Search" className='text-sm border h-9 w-80 rounded-md pl-10 focus:outline-none focus:border-2 focus:border-violet-500' />
            </div>
            <div className="event-area">
              <button className='p-2 rounded-full focus:outline-none focus: border-violet-500 focus:ring-2 focus:ring-violet-500'>
                <Icon icon="tdesign:notification" width='1.2rem' height='1.2rem' className='text-gray-400' />
              </button>

              <button
                className='p-2 rounded-full focus:outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-500'
                onClick={handleClick}
              >
                <Icon icon="uil:setting" width="1.32rem" height="1.32rem" className='text-gray-400' />
              </button>
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
                sx={{ boxShadow: "2px 3px 9px 0px red" }}
              >
                <MenuItem onClick={handleClose}>
                  <span className='w-[180px] h-[24px] text-sm text-gray-600 flex items-center'>Your Profile</span>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <span className='w-[180px] h-[24px] text-sm text-gray-600 flex items-center'>Setting</span>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <span className='w-[180px] h-[24px] text-sm text-gray-600 flex items-center'>Sign Out</span>
                </MenuItem>
              </Menu>
            </div>
          </div>

          {/* </div> */}
        </div>
        {/* <Outlet /> */}
        <div className="flex-grow bg-red-600 flex items-center justify-center">
          <Outlet />
        </div>
      </div>
    </>
  );
}
export default SideBar;