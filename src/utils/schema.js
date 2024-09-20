import * as yup from "yup";

const amountSchema = yup.object().shape({
  amount: yup
    .number()
    .typeError("Amount must be a number")
    .positive("Amount must be a positive number")
    .required("Amount is required"),

  baseCurrency: yup.string().required("Currency is required"),

  finalCurrency: yup.string().required("Currency is required"),
});

export { amountSchema };
