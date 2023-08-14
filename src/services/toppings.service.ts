import { Pizza, Topping } from '@src/models';
import { axios } from '@src/utils/axios';

function getToppings(): Promise<Pizza[]> {
  return axios
    .GET<Topping[]>({ url: "/pizzas" })
    .then((response) => response?.data)
}

export const ToppingService = {
  getToppings
};