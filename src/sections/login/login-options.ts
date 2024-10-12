import { z } from 'zod';

export const loginSchema = z.object({
  username: z.string().min(1, { message: 'form.username_required' }),
  password: z.string().min(1, { message: 'form.password_required' })
});

export const loginDefaultValues = {
  username: '',
  password: ''
};
