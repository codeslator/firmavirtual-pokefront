import { FC } from 'react';
import { Dropdown } from 'react-daisyui';

interface TypesFilterProps { }

const TypesFilter: FC<TypesFilterProps> = ({ }) => {
  return (
    <Dropdown>
      <Dropdown.Toggle>Click</Dropdown.Toggle>
      <Dropdown.Menu className="w-52">
        <Dropdown.Item>Item 1</Dropdown.Item>
        <Dropdown.Item>Item 2</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default TypesFilter;