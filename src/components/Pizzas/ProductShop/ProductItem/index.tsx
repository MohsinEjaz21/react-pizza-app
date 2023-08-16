import PizzaDisplay from '@src/components/Pizzas/PizzaDisplay';
import PizzaForm from '@src/components/Pizzas/PizzaForm';
import styles from './index.module.scss';

const ProductItem = ({pizza}) => {
  return (
    <div className={styles['product-item']}>
      <PizzaForm pizza={pizza}>
        <PizzaDisplay toppings={pizza?.toppings || []} />
      </PizzaForm>
    </div>
  );
};

export default ProductItem;
