const handleValidateLoginForm = (values: any) => {
  const errors: typeof values = {};

  const validateField = (
    fieldName: typeof values,
    min: number,
    max: number
  ) => {
    if (!values[fieldName]) {
      errors[fieldName] = "Field is required.";
    } else if (values[fieldName].length < min) {
      errors[fieldName] = `Must be at least ${min} characters.`;
    } else if (values[fieldName].length > max) {
      errors[fieldName] = `Must be ${max} characters or less`;
    }
  };

  validateField("username", 6, 15);
  validateField("password", 8, 20);

  return errors;
};

export default handleValidateLoginForm;
