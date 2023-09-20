import { z } from 'zod'

export const signUpSchema = z.object({
    firstname: z.string().min(1,"First name"),
    lastname: z.string().min(1,"Last name"),
    birthdate: z.string().min(1,"Birth date"),
    email: z.string().email(),
    password: z.string()
      .min(8,"Password must be at least 8 characters long")
      .regex(/[A-Z]/,"Password must contain at least one uppercase letter")
      .regex(/[a-z]/,"Password must contain at least one lowercase letter")
      .regex(/[@$!%*?&]/,"Password must contain at least one special character (@, $, !, %,*, ?, &)"),
    confirmPassword: z.string(),
  }).refine(data => data.password === data.confirmPassword,{
    message:"Password did not match",
    path:["confirmPassword"],
  });
  
  export type TSignUpSchema = z.infer<typeof signUpSchema>