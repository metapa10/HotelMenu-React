import React from 'react';
import './App.css';
import MenuList from './components/MenuList';

const App: React.FC = () => {
  const menuItems = [
    {
      name: 'Pizza Tandoori',
      description: 'Chessey pizza with tandoori sauce and veggies.',
      price: 12.99,
    },
    {
      name: 'Paneer Tikka',
      description: 'Freshly marinated cottage chesse with thicked sauce.',
      price: 18.99,
    },
    {
      name: 'Lassi',
      description: 'Classic Indian dessert with sweet yogurt.',
      price: 6.99,
    },
  ];

  return (
    <div className="app">
      <h1>Hotel Restaurant Menu</h1>
      <MenuList menuItems={menuItems} />
    </div>
  );
};

export default App;
