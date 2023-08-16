import ProductItem from "@src/components/pizzas/ProductShop/ProductItem";
import { store$ } from "@src/store";

function NewProductPage() {
  const data = store$.pizzas.use();

  return (
   <ProductItem visualise={data[0]}/>
  )
}

export default NewProductPage
