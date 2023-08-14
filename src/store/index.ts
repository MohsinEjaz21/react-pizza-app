import { observable } from "@legendapp/state";
import { PizzaSlice } from "@src/store/pizza.slice";
import { ToppingsSlice } from "@src/store/toppings.slice";

export const toppingStore$ = observable(structuredClone(ToppingsSlice));
export const inventoryStore$ = observable(structuredClone(PizzaSlice));
