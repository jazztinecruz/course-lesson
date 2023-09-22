const handleValidateLoginForm = (values) => {
  const errors = {};

  const validateField = (
    fieldName,
    min,
    max
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
