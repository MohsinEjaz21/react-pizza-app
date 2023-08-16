import Loader from '@src/components/CustomWidgets/LoaderWidget/Loader';
import { PizzaService } from '@src/services';
import { store$ } from '@src/store';
import useSWR from 'swr';

function ToppingsGuard({ children }) {
  const { data, error, isLoading } = useSWR('/toppings', PizzaService.getToppings);

  if (isLoading) { return <Loader active={true} /> }
  if (error) { throw Error('Something went wrong [Get Toppings]') }
  if (data) { store$.toppings.set(data || []) }
  <>
    {children}
  </>
}

export default ToppingsGuard