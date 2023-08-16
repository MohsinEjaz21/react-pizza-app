import ProductItem from "@src/components/pizzas/ProductShop/ProductItem";
import { store$ } from "@src/store";
import { useEffect } from "react";
import { useParams } from "react-router";

function ProductItemPage() {
  const { id } = useParams();
  const pizza = store$.pizzas.get().find((pizza) => pizza.id == id);
  const pizzaForm = store$.pizzaForm.use();
  useEffect(() => { store$.pizzaForm.set(pizza) }, [pizza])

  return (
    <ProductItem pizza={pizzaForm} />
  )
}

export default ProductItemPage
