export interface MenuItem {
  name: string;
  price: number;
  image: string;
}

export interface OrderItem extends MenuItem {
  quantity: number;
}
