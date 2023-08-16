import PizzaDisplay from '@src/components/pizzas/PizzaDisplay';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import styles from './index.module.scss';

const PizzaItem = ({ pizza }) => {
  return (
    <div className={styles['pizza-item']}>
      <Link to={`/products/${pizza.id}`}>
        <PizzaDisplay pizza={pizza} />
        <h4>{pizza.name}</h4>
        <button type="button" className={classNames(styles['btn'], styles['btn__ok'])}>
          View Pizza
        </button>
      </Link>
    </div>
  );
};

export default PizzaItem;
