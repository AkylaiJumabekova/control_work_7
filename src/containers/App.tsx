import { useState } from 'react';
import MenuItemList from '../components/MenuItemList';
import OrderList from '../components/OrderList';
import TotalPrice from '../components/TotalPrice';
import { MenuItem, OrderItem } from '../types';
import hamburgerImage from '../assets/hamburger.png';
import cheeseburgerImage from '../assets/cheeseburger.png';
import friesImage from '../assets/fries.png';
import coffeeImage from '../assets/coffee.png';
import teaImage from '../assets/tea.png';
import colaImage from '../assets/cola.png';
import spriteImage from '../assets/sprite.png';
import fantaImage from '../assets/fanta.png';
import './App.css';

const createMenuItems = (): MenuItem[] => [
  { name: 'Hamburger', price: 80, image: hamburgerImage },
  { name: 'Cheeseburger', price: 90, image: cheeseburgerImage },
  { name: 'Fries', price: 45, image: friesImage },
  { name: 'Coffee', price: 70, image: coffeeImage },
  { name: 'Tea', price: 50, image: teaImage },
  { name: 'Cola', price: 40, image: colaImage },
  { name: 'Sprite', price: 40, image: spriteImage },
  { name: 'Fanta', price: 40, image: fantaImage }
];

const App = () => {
  const [orderItems, setOrderItems] = useState<OrderItem[]>([]);

  const addItemToOrder = (item: MenuItem) => {
    setOrderItems((prevItems) => {
      const newItems = [...prevItems];
      const index = newItems.findIndex(orderItem => orderItem.name === item.name);

      if (index !== -1) {
        newItems[index].quantity += 1;
      } else {
        newItems.push({ ...item, quantity: 1 });
      }

      return newItems;
    });
  };

  const removeItemFromOrder = (name: string) => {
    setOrderItems((prevItems) =>
      prevItems.filter((item) => item.name !== name)
    );
  };

  const calculateTotalPrice = () => {
    return orderItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="App">
      <MenuItemList items={createMenuItems()} onAddItem={addItemToOrder} />
      <OrderList items={orderItems} onRemoveItem={removeItemFromOrder} />
      <div className="controls">
        <TotalPrice total={calculateTotalPrice()} />
      </div>
    </div>
  );
};

export default App;
