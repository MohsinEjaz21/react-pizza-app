import { PizzaService } from '@src/services';
import { store$ } from '@src/store';
import useSWR from 'swr';

function ToppingsGuard({ children }) {
  const { data, error, isLoading } = useSWR('/toppings', PizzaService.getToppings);
  store$.isLoading.toppings.set(isLoading)

  if (error) { throw Error('Something went wrong [Get Toppings]') }
  if (data) { store$.toppings.set(data || []) }
  return(
  <>
    {children}
  </>
  )
}

export default ToppingsGuard