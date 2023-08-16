import { store$ } from '@src/store';
import classnames from 'classnames';
import styles from './index.module.scss';

const PizzaToppings = () => {
  const pizzaForm$ = store$.pizzaForm;
  const toppings = store$.toppings.use();

  const existsInToppings = (topping) => {
    return pizzaForm$.toppings.get().find(t => t.id == topping.id)
  }
  const selectTopping = (topping) => {
    if (existsInToppings(topping)) {
      pizzaForm$.toppings.set(prev => prev.filter(t => t.id != topping.id))
    } else {
      pizzaForm$.toppings.set(prev => [...prev, topping])
    }
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
