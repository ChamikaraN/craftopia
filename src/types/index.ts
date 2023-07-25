export interface Employee {
  email: string;
  first_name: string;
  gender: "M" | "F" | "";
  last_name: string;
  number: string;
  photo?: string;
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
  images?: string[];
  status: boolean;
  createdAt: Date;
  updatedAt: Date;
  _id?: string;
  id?: string;
  __v?: number;
}

export interface Category {
  name: string;
  description: string;
  image: string;
  status: boolean;
  createdAt: Date;
  updatedAt: Date;
  _id?: string;
  id?: string;
  __v?: number;
}
