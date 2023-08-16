import PizzaDisplay from '@src/components/Pizzas/PizzaDisplay';
import PizzaForm from '@src/components/Pizzas/PizzaForm';
import styles from './index.module.scss';

const ProductItem = ({visualise}) => {
  return (
    <div className={styles['product-item']}>
      <PizzaForm>
        <PizzaDisplay pizza={visualise} />
      </PizzaForm>
    </div>
  );
};

export default ProductItem;
