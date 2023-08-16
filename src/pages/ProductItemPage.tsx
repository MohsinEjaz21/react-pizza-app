import ProductItem from "@src/components/Pizzas/ProductShop/ProductItem";
import { store$ } from "@src/store";
import { useEffect } from "react";
import { useParams } from "react-router";

function ProductItemPage() {
  const { id } = useParams();
  const pizzaForm = store$.pizzaForm.use();

  useEffect(() => {
    if (id) {
      const pizza = store$.pizzas.get()?.find((pizza) => pizza?.id == parseInt(id));
      store$.pizzaForm.set(pizza)
    }
  }, [id])

  if(id && !pizzaForm?.id) return (<p>No Pizza Found with id: {id}</p>)

  return (
    <ProductItem pizza={pizzaForm} />
  )
}

export default ProductItemPage
