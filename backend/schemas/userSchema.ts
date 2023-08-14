import z from 'zod';

export const UserSchema = z.object({
  body: z.object({
    username: z.string(),
    email: z.string().email(),
    password: z.string().min(6),
  }),
});

export type User = z.infer<typeof UserSchema>['body'];
// export type UserInput = Omit<User, 'passwordConfirmation'>;
