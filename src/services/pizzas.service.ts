import { Pizza } from '@src/models';
import { axios } from '@src/utils/axios';

function removePizza(payload: Pizza): Promise<Pizza> {
  return axios
    .POST<Pizza>({ url: `/pizzas/${payload.id}` })
    .then((response) => response?.data)
}

function updatePizza(payload: Pizza): Promise<Pizza> {
  return axios
    .PUT<Pizza>({ url: `/pizzas/${payload.id}`, body: payload })
    .then((response) => response?.data)
}

function createPizza(payload: Pizza): Promise<Pizza> {
  return axios
    .POST<Pizza>({ url: "/pizzas", body: payload })
    .then((response) => response?.data)
}

function getPizzas(): Promise<Pizza[]> {
  return axios
    .GET<Pizza[]>({ url: "/pizzas" })
    .then((response) => response?.data)
}

export const PizzaService = {
  removePizza,
  updatePizza,
  createPizza,
  getPizzas,
};