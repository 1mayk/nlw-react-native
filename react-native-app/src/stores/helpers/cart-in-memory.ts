import { ProductProps } from "@/utils/data/products";
import { ProductCartProps } from "../cart-store";

export function add(products: ProductCartProps[], newProduct: ProductProps) {
  const existingProduct = products.find(({ id }) => newProduct.id === id);

  if (existingProduct) {
    return products.map((product) =>
      product.id === existingProduct.id
        ? { ...product, quantity: product.quantity + 1 }
        : product
    );
  }

  return [...products, { ...newProduct, quantity: 1 }];
}

export function remove(products: ProductCartProps[], productId: string) {
  // Interação em cada produto, aplicando a lógica a cada produto iterado
  const updatedProducts = products.map((product) =>
    product.id === productId
      ? {
          ...product,
          quantity: product.quantity > 1 ? product.quantity - 1 : 0,
        }
      : product
  );

  // Faço limpeza no retorno, apenas dos prods com quantity maior que
  // zero serão exibidos
  return updatedProducts.filter((product) => product.quantity > 0);
}
