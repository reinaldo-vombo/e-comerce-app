import React from 'react';
import { AiOutlineShopping } from 'react-icons/ai';
import { FaHeart, FaUser } from 'react-icons/fa';
import { navlinks, categorylinks } from '../constants';

const Sidebar = () => {
  return (
    <>
      <div className='sidebar-container'>
        <div className='sidebar-user_items'>
          {navlinks.map((item, index) => (
            <ul className='sidebar-item' key={index}>
              <li>
                <a href=''>
                  <i>{item.imgUrl}</i>&nbsp;
                  {item.name}
                </a>
              </li>
            </ul>
          ))}
        </div>
        <div className='sidebar-category'>
          <div className='sidebar-user_items'>
            <h2>Category</h2>
            {categorylinks.map((item, index) => (
              <ul className='sidebar-item' key={index}>
                <li>
                  <a href=''>
                    <i>{item.imgUrl}</i>&nbsp;
                    {item.name}
                  </a>
                </li>
              </ul>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
