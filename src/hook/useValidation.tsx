import { useDidMountEffect } from '@src/hook/useDidMountEffect';
import { globalStore$ } from '@src/store';
import { useEffect, useState } from 'react';
const validations$ = globalStore$.validation;

const useValidation = (key, value, validations) => {
  const [isValid, setIsValid] = useState(true);
  const [validationMessage, setValidationMessage] = useState("");
  const [mouseLeave, setMouseLeave] = useState(false);
  const submitted = validations$.submitted.use();
  const reset = validations$.reset.use();
  const skipRequired = validations$.skipRequired.use();

  const setSubmitted = validations$.submitted.set;
  const setError = validations$.errors.set;

  useEffect(() => {
    if (reset) {
      setMouseLeave(false)
      setSubmitted(false)
    } else if (submitted) {
      setMouseLeave(true)
    }
  }, [reset, submitted])

  useDidMountEffect(() => {
    if (validationMessage.length > 0) {
      setError((prev) => prev.includes(key) ? prev : [...prev, key])
    } else {
      setError((prev) => prev.filter((e) => e !== key))
    }
  }, [validationMessage])

  useEffect(() => {
    if (!validations || reset) {
      setIsValid(true);
      setValidationMessage("");
      return;
    }

    if ((mouseLeave || submitted) && validations) {
      const { required, minLength, maxLength, pattern, min, max, customValidation } = validations;

      let trimmedValue = value || "";
      if (trimmedValue && typeof trimmedValue === 'string') {
        trimmedValue = trimmedValue.trim();
      }

      setIsValid(true);
      setValidationMessage("");

      if (!skipRequired && required && required.value && trimmedValue === "") {
        setIsValid(false);
        setValidationMessage(required.message);
        return;
      }

      if (minLength && trimmedValue?.length < minLength?.value) {
        setIsValid(false);
        setValidationMessage(minLength.message);
        return;
      }

      if (maxLength && trimmedValue?.length > maxLength?.value) {
        setIsValid(false);
        setValidationMessage(maxLength.message);
        return;
      }

      if (pattern && !new RegExp(pattern.value).test(trimmedValue)) {
        setIsValid(false);
        setValidationMessage(pattern.message);
        return;
      }

      if (min && !isNaN(Number(trimmedValue)) && Number(trimmedValue) < min.value) {
        setIsValid(false);
        setValidationMessage(min.message);
        return;
      }

      if (max && !isNaN(Number(trimmedValue)) && Number(trimmedValue) > max.value) {
        setIsValid(false);
        setValidationMessage(max.message);
        return;
      }

      if (customValidation && !customValidation.value(trimmedValue)) {
        setIsValid(false);
        setValidationMessage(customValidation.message);
        return;
      }
    }
  }, [value, validations, mouseLeave, submitted, reset, skipRequired]);

  return {
    invalid: !isValid && (mouseLeave || submitted),
    invalidText: !isValid && (mouseLeave || submitted) ? validationMessage : '',
    setMouseLeave,
  };
};

export default useValidation;
