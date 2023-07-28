import { z } from "zod";

export const categorySchema = z.object({
  name: z
    .string()
    .nonempty({ message: "Category name is required" })
    .min(6, { message: "Category name is too short" }),
  description: z
    .string()
    .nonempty({ message: "Category description is required" })
    .min(10, { message: "Category description is too short" }),
  image: z.string().nonempty({ message: "Category image is required" }),
  status: z.boolean(),
});

export const productSchema = z.object({
  name: z
    .string()
    .nonempty({ message: "Product name is required" })
    .min(1, { message: "Product name is too short" })
    .max(100, { message: "Product name is too long" }),
  description: z
    .string()
    .nonempty({ message: "Product description is required" })
    .min(1, { message: "Product description is too short" })
    .max(500, { message: "Product description is too long" }),
  price: z
    .number()
    .min(0, { message: "Product price must be greater than or equal to 0" }),
  category: z
    .string()
    .nonempty({ message: "Product category is required" })
    .min(1, { message: "Product category is too short" })
    .max(100, { message: "Product category is too long" }),
  stock: z
    .number()
    .min(0, { message: "Product stock must be greater than or equal to 0" }),
  image: z.string().nonempty({ message: "Product image is required" }),
  status: z.boolean(),
});
