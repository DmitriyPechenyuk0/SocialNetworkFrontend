import { InferType } from "yup";
import { authorizationSchema } from "../schemas";

export type AuthorizationFormValues = InferType<typeof authorizationSchema>;