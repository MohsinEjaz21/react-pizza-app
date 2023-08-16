import PizzaDisplay from '@src/components/pizzas/PizzaDisplay';
import PizzaForm from '@src/components/pizzas/PizzaForm';
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
