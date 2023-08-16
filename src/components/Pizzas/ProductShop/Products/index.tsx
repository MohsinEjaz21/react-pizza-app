import PizzaItem from '@src/components/Pizzas/PizzaItem';
import { usePizza } from '@src/hook/usePizza';
import styles from './index.module.scss';

const Products = ({ pizzas }) => {
  const { onClickAddNewPizza } = usePizza()

  return (
    <div className={styles.products}>
      <div className={styles['products__new']}>
        <button onClick={onClickAddNewPizza} className={'btn btn__ok'}>
          New Pizza
        </button>
      </div>

      <div className={styles['products__list']}>
        {!pizzas.length ? (
          <div>No pizzas, add one to get started.</div>
        ) : (
          pizzas.map(pizza => (
            <PizzaItem key={pizza.id} pizza={pizza} />
          ))
        )}
      </div>
    </div>
  );
};

export default Products;
