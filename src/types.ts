// Define the schema for a single product
// This is to make this type reusable across the app
export type ProductType = {
  id: string | number;
  name: string;
  shortDescription: string;
  description: string;
  price: number;
  sizes: string[];
  colors: string[];
  images: Record<string, string>; // e.g., { "red": "url1", "blue": "url2" }
};

// For an array of products
export type ProductsType = ProductType[];
