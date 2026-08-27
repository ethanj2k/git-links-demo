/** Product catalogue lookup, kept deliberately dumb for the demo. */
export function findProduct(catalogue, sku) {
  return catalogue.find((p) => p.sku === sku) ?? null;
}
export const inStock = (product) => Boolean(product && product.available > 0);
