import { z } from 'zod';

export const contactUSchema = z.object({
  phone: z.string(),
  email: z.string().email(),
  description: z.string()
});

export const contactUsDefaultValues = {
  phone: '',
  email: '',
  description: ''
};
