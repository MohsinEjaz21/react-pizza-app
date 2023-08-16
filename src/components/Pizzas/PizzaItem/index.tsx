import PizzaDisplay from '@src/components/pizzas/PizzaDisplay';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import styles from './index.module.scss';

export const PizzaItem = ({ pizza }) => {
  return (
    <div className={styles['pizza-item']}>
      <Link to={`/products/${pizza.id}`}>
        <PizzaDisplay toppings={pizza?.toppings} />
        <h4>{pizza.name}</h4>
        <button type="button" className={classNames('btn btn__ok')}>
          View Pizza
        </button>
      </Link>
    </div>
  );
};
