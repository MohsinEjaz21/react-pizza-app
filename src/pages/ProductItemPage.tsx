import ProductItem from "@src/components/pizzas/ProductShop/ProductItem";
import { store$ } from "@src/store";
import { useParams } from "react-router";

function ProductItemPage() {
  const { id } = useParams();
  const pizza = store$.pizzas.get().find((pizza) => pizza.id == id);
  store$.pizzaForm.set(pizza);

  console.log(pizza);
  return (
   <ProductItem pizza={pizza}/>
  )
}

export default ProductItemPage
