const handleValidateContactForm = (values: any) => {
  const errors: typeof values = {};

  const validateField = (
    fieldName: typeof values,
    min: number,
    max: number
  ) => {
    const reg = /^\d+$/;

    if (!values[fieldName]) {
      errors[fieldName] = "Field is required.";
    } else if (values[fieldName].length < min) {
      errors[fieldName] = `Must be at least ${min} characters.`;
    } else if (values[fieldName].length > max) {
      errors[fieldName] = `Must be ${max} characters or less`;
    } else if (!reg.test(values.phoneNumber)) {
      errors.phoneNumber = "The phone number should contain only numbers.";
    } else if (!values.email.includes("@")) {
      errors.email = "Email should contain a @";
    }
  };

  validateField("firstName", 2, 15);
  validateField("lastName", 2, 15);
  validateField("phoneNumber", 1, 11);

  return errors;
};

export default handleValidateContactForm;
