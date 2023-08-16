import { PizzaService } from "@src/services";
import { store$ } from "@src/store";
import { GlobalSlice } from "@src/store/global.slice";
import { useNavigate } from "react-router";

export const usePizza = () => {
  const pizzaForm$ = store$.pizzaForm;
  const navigate = useNavigate();

  const navigateToPizzas = () => {
    navigate(`/products`)
  }
  const refetchPizzas = () => {
    store$.pizzas.set(PizzaService.getPizzas())
  }
  const createPizza = () => {
    PizzaService.createPizza(pizzaForm$.get()).finally(() => {
      refetchPizzas()
      navigateToPizzas()
    })
  }
  const updatePizza = () => {
    PizzaService.updatePizza(pizzaForm$.get()).finally(() => {
      refetchPizzas()
      navigateToPizzas()
    })
  }
  const removePizza = () => {
    PizzaService.removePizza(pizzaForm$.get()).finally(() => {
      refetchPizzas()
      navigateToPizzas()
    })
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
