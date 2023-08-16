import Products from "@src/components/pizzas/ProductShop/Products";
import { store$ } from "@src/store";

function HomePage() {
  const data = store$.pizzas.use();

  return (
    <Products pizzas={data} />
  )
}

export default HomePage
