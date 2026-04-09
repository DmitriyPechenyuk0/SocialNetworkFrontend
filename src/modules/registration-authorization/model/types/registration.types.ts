import { InferType } from "yup";
import { registrationSchema } from "../schemas";

export type RegistrationFormValues = InferType<typeof registrationSchema>;