import { isValidPhoneNumber } from 'libphonenumber-js';
import { z } from 'zod';

export const contactUSchema = z
  .object({
    phone: z.string(),
    email: z.string(),
    description: z.string().min(1, 'form.description_required')
  })
  .superRefine(({ email, phone }, ctx) => {
    if (!phone && !email) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'form.email_required',
        path: ['email']
      });
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'form.phone_required',
        path: ['phone']
      });
    }
    if (email) {
      try {
        z.string().email().parse(email);
      } catch (error) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: 'form.email_invalid',
          path: ['email']
        });
      }
    }
    if (phone && !isValidPhoneNumber(phone)) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'form.phone_invalid',
        path: ['phone']
      });
    }
  });

export const contactUsDefaultValues = {
  phone: '',
  email: '',
  description: ''
};
