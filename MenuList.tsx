import React from 'react';
import MenuItem from './MenuItem';

interface MenuListProps {
  menuItems: {
    name: string;
    description: string;
    price: number;
  }[];
}

const MenuList: React.FC<MenuListProps> = ({ menuItems }) => (
  <div className="menu-list">
    {menuItems.map((item, index) => (
      <MenuItem key={index} {...item} />
    ))}
  </div>
);

export default MenuList;
