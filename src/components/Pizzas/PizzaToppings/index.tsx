import classnames from 'classnames';
import styles from './index.module.scss';

const PizzaToppings = ({ toppings }) => {

  const existsInToppings = (topping) => {
  }
  const selectTopping = (topping) => {
  }

  return (
    <div className={styles['pizza-toppings']}>
      {toppings.map(topping => (
        <div
          key={topping.name}
          className={classnames(styles['pizza-toppings-item'], {
            [styles.active]: existsInToppings(topping),
          })}
          onClick={() => selectTopping(topping)}
        >
          <img
            src={`/assets/img/toppings/singles/${topping.name}.svg`}
            alt="topping"
          />
          {topping.name}
        </div>
      ))}
    </div>
  );
};

export default PizzaToppings;
