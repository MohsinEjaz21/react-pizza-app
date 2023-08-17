import PizzaDisplay from '@src/components/Pizzas/PizzaDisplay';
import PizzaForm from '@src/components/Pizzas/PizzaForm';
import styles from './index.module.scss';

export const ProductItem = ({pizza}) => {
  return (
    <div className={styles['product-item']}>
      <PizzaForm pizza={pizza}>
        <PizzaDisplay toppings={pizza?.toppings || []} />
      </PizzaForm>
    </div>
  );
};