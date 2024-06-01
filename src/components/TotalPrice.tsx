import React from 'react';

interface TotalPriceProps {
  total: number;
}

const TotalPrice: React.FC<TotalPriceProps> = ({ total }) => (
  <p className="total-price">Total Price: {total} som</p>
);

export default TotalPrice;
