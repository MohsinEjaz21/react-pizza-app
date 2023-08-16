import PizzaToppings from '@src/components/pizzas/PizzaToppings';
import InputWidget from '@src/components/widgets/InputWidget';
import { usePizza } from '@src/hook/usePizza';
import { store$ } from '@src/store';
import styles from './index.module.scss';

const PizzaForm = ({ children, pizza }) => {
  const pizzaForm$ = store$.pizzaForm;
  const pizzaName = pizzaForm$.name.use();
  const { createPizza, removePizza, updatePizza } = usePizza();

  const handlePizzaNameInput = (e) => {
    pizzaForm$.name.set(e.target.value);
  }

  return (
    <div className={styles['pizza-form']}>
      <form>
        <InputWidget
          key="name"
          label="Pizza name"
          placeholder="e.g. Pepperoni"
          value={pizzaName}
          onChange={handlePizzaNameInput}
          validations={{
            required: { value: true, message: 'Pizza must have a name' }
          }}
        />

        {children}

        <label>
          <h4>Select toppings</h4>
        </label>

        <div className={styles['pizza-form__list']}>
          <PizzaToppings  />
        </div>

        <div className={styles['pizza-form__actions']}>
          {!pizza?.id ? (
            <button type="button" className={`btn btn__ok`} onClick={() => createPizza()}>
              Create Pizza
            </button>
          ) : (
            <>
              <button type="button" className={`btn btn__ok`} onClick={() => updatePizza()}>
                Save changes
              </button>
              <button type="button" className={`btn btn__warning`} onClick={() => removePizza()}>
                Delete Pizza
              </button>
            </>
          )}
        </div>
      </form>
    </div>
  );
};

export default PizzaForm;
