import { FC } from 'react';
import { Button, Menu, Navbar } from 'react-daisyui';

interface HeaderProps { }

const Header: FC<HeaderProps> = ({ }) => {
  return (
    <Navbar className="bg-base-300 shadow-2xl">
      <div className="flex-1">
        <Button tag="a" color="ghost" className="normal-case text-xl">
          daisyUI
        </Button>
      </div>
      <div className="flex-none">
        <Menu horizontal={true} className="px-1">
          <Menu.Item>
            <a>Link</a>
          </Menu.Item>
        </Menu>
      </div>
    </Navbar>
  );
};

export default Header;