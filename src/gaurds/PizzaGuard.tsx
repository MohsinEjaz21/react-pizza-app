import { PizzaService } from '@src/services';
import { store$ } from '@src/store';
import { useEffect } from 'react';
import useSWR from 'swr';

export function PizzaGuard({ children }) {
  const { data, error, isLoading } = useSWR('/pizzas', PizzaService.getPizzas);
  useEffect(() => { store$.pizzas.set(data || [])}, [data])
  useEffect(() => { store$.isLoading.pizzas.set(isLoading)}, [isLoading])

  if (error) { return <div>Something went wrong [Get Pizzas]</div> }
  return (
    <>
      {children}
    </>
  )
}
