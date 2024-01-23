import React from 'react';
// images
import Logo from '../assets/Group 1.png';

const Header = () => {
  return <div className='py-4' id="home">
    <div className='container mx-auto'>
      <div className='flex justify-between items-center'>
        {/* logo */}
        <a href='#'>
          <img src={Logo} alt='' />
        </a>
        <div>
        <button className='btn btn-sm'><a href='https://instagram.com/luth29._'>Instagram</a></button>
        <button className='btn btn-sm'><a href='https://www.linkedin.com/in/luthfi-kurnia-hadi-901b78240/'>LinkedIn</a></button>
        <button className='btn btn-sm'><a href='https://www.github.com/LuthfiKurnia29'>Github</a></button>
        </div>
      </div>
    </div>
  </div>;
};

export default Header;
