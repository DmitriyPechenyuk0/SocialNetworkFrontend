import * as yup from "yup";

export const authorizationSchema = yup.object({
    email: yup
            .string()
            .required("Field is required!")
            .email("Email field must be a valid email!"),
    password: yup
            .string()
            .min(8, "Password length > 8")
            .max(50, "Password length < 50")
            .required("Field is required"),
})