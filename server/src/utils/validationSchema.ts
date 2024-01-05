import { body } from "express-validator";

export const signUpValidation = () => {
  return [
    body("firstName", "FirstName is required").isString(),
    body("lastName", "Last Name is required").isString(),
    body("email", "Email is required").isEmail(),
    body("password", "Password with 6 or more characters required").isLength({
      min: 6,
    }),
  ];
};

export const signInValidation = () => {
  return [
    body("email", "Email is required").isEmail(),
    body("password", "Password with 6 or more characters required").isLength({
      min: 6,
    }),
  ];
};
