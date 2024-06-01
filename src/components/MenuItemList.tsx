import React from 'react';
import { MenuItem } from '../types';
import MenuItemComponent from './MenuItemComponent';

interface MenuItemListProps {
  items: MenuItem[];
  onAddItem: (item: MenuItem) => void;
}

const MenuItemList: React.FC<MenuItemListProps> = ({ items, onAddItem }) => {
  return (
    <div className="menu-item-list">
      {items.map(item => (
        <MenuItemComponent key={item.name} item={item} onAdd={onAddItem} />
      ))}
    </div>
  );
};

export default MenuItemList;
