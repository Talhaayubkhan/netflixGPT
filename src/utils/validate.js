export const validateFormData = (fullName, email, password) => {
  if (fullName !== undefined) {
    const isFullNameValidate = /^[a-zA-Z]+(?:\s[a-zA-Z]+)+$/.test(fullName);
    if (!isFullNameValidate) return "Invalid Full Name";
  }

  const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
    email
  );

  const isPasswordValid =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(
      password
    );

  if (!isEmailValid) return "Invalid Email ID";
  if (!isPasswordValid) return "Invalid Password";

  return null;
};
