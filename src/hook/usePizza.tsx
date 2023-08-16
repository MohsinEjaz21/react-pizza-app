import { store$ } from "@src/store";
import { GlobalSlice } from "@src/store/global.slice";

export const usePizza = () => {
  const pizzaForm$ = store$.pizzaForm;

  const createPizza = () => {
  }
  const updatePizza = () => {
  }
  const removePizza = () => {
  }
  const resetPizzaForm = () => {
    pizzaForm$.set(structuredClone(GlobalSlice.pizzaForm))
  }

  return {
    createPizza,
    updatePizza,
    removePizza,
    resetPizzaForm
  }
}
