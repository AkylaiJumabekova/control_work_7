import React from 'react';
import { MenuItem } from '../types';

interface MenuItemProps {
  item: MenuItem;
  onAdd: (item: MenuItem) => void;
}

const MenuItemComponent: React.FC<MenuItemProps> = ({ item, onAdd }) => {
  const handleAddClick = () => {
    onAdd(item);
  };

  return (
    <div className="menu-item">
      <img src={item.image} alt={item.name} />
      <button onClick={handleAddClick}>
        {item.name} - {item.price} som
      </button>
    </div>
  );
};

export default MenuItemComponent;
