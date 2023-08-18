import { Products } from "@src/components/Pizzas/ProductShop/Products";
import { store$ } from "@src/store";

function ProductsPage() {
  const data = store$.pizzas.use();

  return (
    <Products pizzas={data} />
  )
}

export default ProductsPage
