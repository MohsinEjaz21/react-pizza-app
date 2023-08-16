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
  const navigateToAddPizza = () => {
    navigate(`/products/new`)
  }

  const refetchPizzas = () => {
    store$.isLoading.pizzas.set(true)
    PizzaService.getPizzas().then((data) => {
      store$.pizzas.set(data)
    }).finally(() => {
      store$.isLoading.pizzas.set(false)
    })
  }

  const validatePizzaForm = () => {
    if (!pizzaForm$.get().name?.trim()) {
      window.alert("Please enter a name")
      return false
    }
    if (pizzaForm$.toppings.get()?.length === 0) {
      window.alert("Please select at least one topping")
      return false
    }
    return true
  }

  const onClickAddNewPizza = () => {
    resetPizzaForm()
    navigateToAddPizza()
  }

  const createPizza = () => {
    if (!validatePizzaForm()) return
    PizzaService.createPizza(pizzaForm$.get()).finally(() => {
      refetchPizzas()
      navigateToPizzas()
    })
  }
  const updatePizza = () => {
    if (!validatePizzaForm()) return
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
  const cancelAddUpdatePizza = () => {
    navigateToPizzas()
  }

  const resetPizzaForm = () => {
    pizzaForm$.set(structuredClone(GlobalSlice.pizzaForm))
  }

  return {
    createPizza,
    updatePizza,
    removePizza,
    resetPizzaForm,
    cancelAddUpdatePizza,
    onClickAddNewPizza
  }
}
