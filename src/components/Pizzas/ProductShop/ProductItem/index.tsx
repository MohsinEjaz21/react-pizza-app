import PizzaDisplay from '@src/components/pizzas/PizzaDisplay';
import PizzaForm from '@src/components/pizzas/PizzaForm';
import styles from './index.module.scss';

const ProductItem = ({pizza}) => {
  return (
    <div className={styles['product-item']}>
      <PizzaForm pizza={pizza}>
        <PizzaDisplay toppings={pizza.toppings} />
      </PizzaForm>
    </div>
  );
};

export default ProductItem;
