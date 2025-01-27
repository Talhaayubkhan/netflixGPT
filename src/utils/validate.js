export const validateFormData = (fullName, email, password) => {
  const isFullNameValidate = /^[a-zA-Z]+(?:\s[a-zA-Z]+)+$/.test(fullName);

  const isEmailValid =
    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email) &&
    email !== "";

  const isPasswordValid =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(
      password
    ) && password;

  if (!isFullNameValidate) return "Invalid Full Name";
  if (!isEmailValid) return "Invalid Email ID";
  if (!isPasswordValid) return "Invalid Password";

  return null;
};
