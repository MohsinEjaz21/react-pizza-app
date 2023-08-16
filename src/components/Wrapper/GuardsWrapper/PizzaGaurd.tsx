import Loader from '@src/components/CustomWidgets/LoaderWidget/Loader';
import { PizzaService } from '@src/services';
import { store$ } from '@src/store';
import useSWR from 'swr';

export function PizzaGuard({ children }) {
  const { data, error, isLoading } = useSWR('/pizzas', PizzaService.getPizzas);

  if (isLoading) { return <Loader active={true} /> }
  if (error) { throw Error('Something went wrong [Get Pizzas]') }
  if (data) { store$.pizzas.set(data || []) }
  <>
    {children}
  </>

}

export default PizzaGuard