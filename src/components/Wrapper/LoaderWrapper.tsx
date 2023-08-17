import { store$ } from "@src/store";
import { LoaderWidget } from "../Widgets/LoaderWidget";

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
