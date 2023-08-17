import useValidation from '@src/hook/useValidation';
import styles from './InputWidget.module.scss';

const InputWidget = ({
  key,
  label = "",
  placeholder = "",
  value = "",
  type = "text",
  onChange,
  validations
}) => {
  const { invalid, invalidText, setMouseLeave } = useValidation(key, value, validations);

  return (
    <label>
      <h4>{label}</h4>
      <input
        onMouseEnter={() => setMouseLeave(true)}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`${styles['pizza-form__input']} ${invalid ? styles['error'] : ''}`}
      />
      {invalid && (
        <div className={styles['pizza-form__error']}>
          <p>{invalidText}</p>
        </div>
      )}
    </label>
  );
};

export default InputWidget;
