import * as yup from "yup";

export const contentSchema = yup.object().shape({
  amount: yup
    .number()
    .typeError("Minimum x!")
    .required("Minimum  1000")
    .min(1000, "Minimum  1000")
    .max(100000000, "Maximum 100000000"),
  installments: yup
    .number()
    .typeError("Minimum  1 and maximum of 12")
    .required("Minimum  1 and maximum of 12")
    .min(1, "Minimum  is 1")
    .max(12, "Maximum  is 12"),
  mdr: yup
    .number()
    .typeError("Minimum100")
    .required()
    .max(100, "Maximum MDR is 100"),
  days: yup.string(),
});
