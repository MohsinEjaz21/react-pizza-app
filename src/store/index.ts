import { observable } from "@legendapp/state";
import { GlobalSlice } from "@src/store/global.slice";
import { PizzaSlice } from "@src/store/pizza.slice";
import { ReferenceDataSlice } from "@src/store/reference-data.slice";
import { ToppingSlice } from "@src/store/toppings.slice";

export const toppingStore$ = observable(structuredClone(ToppingSlice));
export const inventoryStore$ = observable(structuredClone(PizzaSlice));
export const globalStore$ = observable(structuredClone(GlobalSlice));
export const referenceDataStore$ = observable(structuredClone(ReferenceDataSlice));
