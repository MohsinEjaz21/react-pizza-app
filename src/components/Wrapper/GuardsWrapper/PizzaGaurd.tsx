import { PizzaService } from '@src/services';
import { store$ } from '@src/store';
import useSWR from 'swr';

export function PizzaGuard({ children }) {
  const { data, error, isLoading } = useSWR('/pizzas', PizzaService.getPizzas);
  store$.isLoading.pizzas.set(isLoading)

  if (error) { throw Error('Something went wrong [Get Pizzas]') }
  if (data) { store$.pizzas.set(data || []) }
  return (
    <>
      {children}
    </>
  )
}

export default PizzaGuard