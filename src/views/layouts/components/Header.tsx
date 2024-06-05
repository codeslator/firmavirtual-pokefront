import { FC } from 'react';
import { Menu, Navbar } from 'react-daisyui';
import { NavLink } from 'react-router-dom';
import FirmaVirtualLogo from '../../assets/images/firmavirtual-logo.png';

interface HeaderProps { }

const Header: FC<HeaderProps> = ({ }) => {


  return (
    <Navbar className="bg-base-300 shadow-2xl">
      <div className="flex-1">
        <a href="https://firmavirtual.legal/" target="_blank">
          <img src={FirmaVirtualLogo} className="mx-3" alt="Firma Virtual Logo" />
        </a>
      </div>
      <div className="flex-none">
        <Menu horizontal={true} className="px-1">
          <Menu.Item>
            <NavLink to="/">Go to Home</NavLink>
          </Menu.Item>
        </Menu>
      </div>
    </Navbar>
  );
};

export default Header;