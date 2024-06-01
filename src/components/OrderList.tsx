import React from 'react';
import { OrderItem } from '../types';

interface OrderListProps {
  items: OrderItem[];
}

const OrderList: React.FC<OrderListProps> = ({ items }) => {
  return (
    <div className="order-list">
      {items.map(item => (
        <div key={item.name} className="order-item">
          {item.name} x{item.quantity} - {item.price * item.quantity} som
        </div>
      ))}
    </div>
  );
};

export default OrderList;
