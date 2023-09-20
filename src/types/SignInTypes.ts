import { z } from 'zod'

export const signInSchema = z.object({
    email: z.string().email(),
    password: z.string()
      .min(1,"Please input password")
  });
  
  export type TSignInSchema = z.infer<typeof signInSchema>