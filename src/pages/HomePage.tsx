import Products from "@src/components/Pizzas/ProductShop/Products";
import { store$ } from "@src/store";

function HomePage() {
  const data = store$.pizzas.use();

  return (
    <Products pizzas={data} />
  )
}

export default HomePage
