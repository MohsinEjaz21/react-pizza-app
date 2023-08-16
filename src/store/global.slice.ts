import { Pizza, Topping } from "@src/models";

export const GlobalSlice = {
  isLoading: {
    pizzas: true,
    toppings: true,
  },
  validation: {
    errors: [] as string[],
    submitted: false,
    reset: false,
    skipRequired: false,
  },
  pizzas: [] as Pizza[],
  toppings: [] as Topping[],

}
