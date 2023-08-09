import React from 'react';

interface MenuItemProps {
  name: string;
  description: string;
  price: number;
}

const MenuItem: React.FC<MenuItemProps> = ({ name, description, price }) => (
  <div className="menu-item">
    <h3>{name}</h3>
    <p>{description}</p>
    <p>Price: ${price.toFixed(2)}</p>
  </div>
);

export default MenuItem;
