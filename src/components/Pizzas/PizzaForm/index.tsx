import PizzaToppings from '@src/components/pizzas/PizzaToppings';
import InputWidget from '@src/components/widgets/InputWidget';
import styles from './PizzaForm.module.scss';

const PizzaForm = ({ children }) => {
  const handlePizzaNameChange = (e) => {
    console.log(e.target.value);
  }
  const exists = false
  const form = {
    name: '',
    toppings: []
  }

  const createPizza = (form) => {
  }
  const updatePizza = (form) => {
  }
  const removePizza = (form) => {
  }

  return (
    <div className={styles['pizza-form']}>
      <form>
        <InputWidget
          key="name"
          label="Pizza name"
          placeholder="e.g. Pepperoni"
          value={'1234'}
          onChange={handlePizzaNameChange}
          validations={{
            required: { value: true, message: 'Pizza must have a name' }
          }}
        />

        {children}

        <label>
          <h4>Select toppings</h4>
        </label>

        <div className={styles['pizza-form__list']}>
          <PizzaToppings toppings={[]} />
        </div>

        <div className={styles['pizza-form__actions']}>
          {!exists ? (
            <button type="button" className={`${styles['btn']} ${styles['btn__ok']}`} onClick={() => createPizza(form)}>
              Create Pizza
            </button>
          ) : (
            <>
              <button type="button" className={`${styles['btn']} ${styles['btn__ok']}`} onClick={() => updatePizza(form)}>
                Save changes
              </button>
              <button type="button" className={`${styles['btn']} ${styles['btn__warning']}`} onClick={() => removePizza(form)}>
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
