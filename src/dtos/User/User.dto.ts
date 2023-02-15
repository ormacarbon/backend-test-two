import { z } from 'zod';

export const UserCreateDTO = z.object({
  username: z.string(),
  password: z.string(),
  email: z.string().email({
    message: 'Invalid Email'
  })
});

export const UserLoginDTO = z.object({
  password: z.string(),
  email: z.string().email({
    message: 'Invalid Email'
  })
});
