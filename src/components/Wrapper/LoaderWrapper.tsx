import { LoaderWidget } from '@src/components/Widgets/LoaderWidget';
import { store$ } from '@src/store';

export const LoaderWrapper = (props) => {

  const isPizzaloading = store$.isLoading.pizzas.use();
  const toppings = store$.isLoading.toppings.use();

  if (isPizzaloading || toppings) {
    return (
      <LoaderWidget active={true} />
    )
  }

  return (
    <>
      {props.children}
    </>
  )
}
