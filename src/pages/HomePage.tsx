import Products from "@src/components/Pizzas/ProductShop/Products"
import useApi from "@src/hook/useApi"
import { PizzaService } from "@src/services"
import { useEffect } from "react"

const payload = [
  {
    id: 1,
    name: 'Pizza #1',
    toppings: [
      { id: 1, name: 'onion' },
      { id: 2, name: 'mushroom' },
      { id: 3, name: 'basil' },
    ],
  },
  {
    id: 2,
    name: 'Pizza #2',
    toppings: [
      {
        "id": 1,
        "name": "anchovy"
      },
      {
        "id": 2,
        "name": "bacon"
      },
      {
        "id": 3,
        "name": "basil"
      },
      {
        "id": 4,
        "name": "chili"
      },
      {
        "id": 5,
        "name": "mozzarella"
      },
      {
        "id": 6,
        "name": "mushroom"
      },
      {
        "id": 7,
        "name": "olive"
      },
      {
        "id": 8,
        "name": "onion"
      },
      {
        "id": 9,
        "name": "pepper"
      },
      {
        "id": 10,
        "name": "pepperoni"
      },
      {
        "id": 11,
        "name": "sweetcorn"
      },
      {
        "id": 12,
        "name": "tomato"
      }
    ],
  },
]
function HomePage() {
  const { data, loading, error, request } = useApi(PizzaService.getPizzas)([]);

  useEffect(() => {
    request()
  }, [])

  return (
    <>
      Loading: {loading}
      <Products pizzas={data} />
    </>
  )
}

export default HomePage