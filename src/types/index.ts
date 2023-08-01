export interface Category {
  name: string;
  description: string;
  image: string | File;
  status: boolean;
  createdAt?: Date;
  updatedAt?: Date;
  _id?: string;
  id?: string;
  __v?: number;
}

export interface Product {
  name: string;
  description: string;
  price: number;
  category: string;
  stock: number;
  image: string | File;
  status: boolean;
  createdAt?: Date;
  updatedAt?: Date;
  _id?: string;
  id?: string;
  __v?: number;
}

export interface CartItem {
  productId: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

export type Order = {
  products: {
    product: string;
    price: string;
    quantity: string;
  }[];
  totalAmount: string;
  customerName: string;
  contactNumber: string;
  shippingAddress: string;
};

export type AdminStatus = {
  totalCategories: number;
  totalProducts: number;
  totalOrders: number;
  totalRevenue: number;
};
