import { FaBars } from 'react-icons/fa';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/images/capres.jpg';
import { navItems } from './NavItems';
import { IconContext } from 'react-icons';
import NavMobile from './NavMobile';
import Button from '../utils/Button';
import { MdClose } from 'react-icons/md';
import ButtonNav from '../utils/ButtonNav';

const Header = () => {
  const [open, setOpen] = useState(false);
  const [navbar, setNavbar] = useState(false);

  /* const onScroll = () => {}; */

  const onScroll = () => {
    if (window.scrollY >= 96) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener('scroll', onScroll);
  return (
    <div className={navbar ? 'navBar solid' : 'navBar'}>
      <div className="md:flex py-2 md:px-10 px-7 items-center justify-between">
        <Link to="/" className="">
          <img
            src={Logo}
            alt="Logo Capres"
            className={navbar ? 'logo logo-small' : 'logo'}
          />
        </Link>
        <div onClick={() => setOpen(!open)}>
          {open ? (
            <MdClose className="close-react-icon" />
          ) : (
            <FaBars className="fabars-react-icon" />
          )}
        </div>
        <nav className=" md:bg-transparent inline-flex">
          <ul
            className={`md:top-0  bg-blue-600 md:bg-transparent md:flex md:items-center md:pb-0 pb-12 absolute md:static  md:z-auto  left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in 
            ${
              open
                ? 'top-24 opacity-100 md:bg-transparent'
                : 'top-[-490px] md:opacity-100 opacity-0'
            } `}
          >
            {navItems.map((item) => (
              <li
                key={item.key}
                className={navbar ? 'li-text shrinked-text' : 'li-text'}
              >
                <Link to={item.path} className="link">
                  {item.name}
                </Link>
              </li>
            ))}
            <div>
              <ButtonNav>Ingresa ya</ButtonNav>
            </div>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
