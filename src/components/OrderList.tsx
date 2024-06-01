import React from 'react';
import { OrderItem } from '../types';

interface OrderListProps {
  items: OrderItem[];
  onRemoveItem: (name: string) => void;
}

const OrderList: React.FC<OrderListProps> = ({ items, onRemoveItem }) => {
  return (
    <div className="order-list">
      {items.length === 0 ? (
        <p>Order is empty. Please add some items</p>
      ) : (
        items.map((item) => (
          <div key={item.name} className="order-item">
            {item.name} x{item.quantity} - {item.price * item.quantity} som
            <button onClick={() => onRemoveItem(item.name)}>Delete</button>
          </div>
        ))
      )}
    </div>
  );
};

export default OrderList;
