import { PizzaService } from '@src/services';
import { store$ } from '@src/store';
import { useEffect } from 'react';
import useSWR from 'swr';

export function ToppingsGuard({ children }) {
  const { data, error, isLoading } = useSWR('/toppings', PizzaService.getToppings);
  useEffect(() => { store$.toppings.set(data || []) }, [data])
  useEffect(() => { store$.isLoading.toppings.set(isLoading) }, [isLoading])

  if (error) { return <div>Something went wrong [Get Toppings]</div> }
  return (
    <>
      {children}
    </>
  )
}
