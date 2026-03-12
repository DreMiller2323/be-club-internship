import { z } from 'zod';

export const schema = z.object({
  fitnesslevel: z.string(),
  reps: z.number(),
  weight: z.number(),
  goal: z.number()
});
 
z.toJSONSchema(schema)