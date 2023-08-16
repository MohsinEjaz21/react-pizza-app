import { DropAnimation } from '@src/components/Pizzas/PizzaDisplay/drop.animation';
import styles from './index.module.scss';

const PizzaDisplay = ({ pizza }) => {
  return (
    <DropAnimation inAnim={true}>
    <div className={styles['pizza-display']}>
      <div className={styles['pizza-display__base']}>
        <img src="/assets/img/pizza.svg" alt="pizza" />

        {pizza?.toppings.map((topping, i) => (
          <img
            key={i}
            alt="topping"
            src={`/assets/img/toppings/${topping.name}.svg`}
            className={styles['pizza-display__topping']}
            style={{ zIndex: i }}
            onDrop={() => {}}
          />
        ))}
      </div>
    </div>
    </DropAnimation>
  );
};

export default PizzaDisplay;
