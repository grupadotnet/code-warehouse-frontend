export type ProductStatus = "IN WAREHOUSE" | "OUT OF STOCK";

export interface Product {
  readonly id: string; // Product ID (immutable)
  barcode: string; // Barcode / SKU
  productName: string; // Name of the product
  producer: string; // Manufacturer (e.g., Dell)
  category: string; // Product category (e.g., Electronics)
  location: string; // Section name (e.g., Section C)
  quantity: number; // Total stock quantity
  status: ProductStatus; // Calculated on the frontend (quantity > 0 or quantity === 0)
  updatedAt: string; // Last modification date
}
