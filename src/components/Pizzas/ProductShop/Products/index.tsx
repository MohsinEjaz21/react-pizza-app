import PizzaItem from '@src/components/pizzas/PizzaItem';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import styles from './index.module.scss';

const Products = ({ pizzas }) => {
  return (
    <div className={styles.products}>
      <div className={styles['products__new']}>
        <Link to="/products/new" className={classNames(styles['btn'], styles['btn__ok'])}>
          New Pizza
        </Link>
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
