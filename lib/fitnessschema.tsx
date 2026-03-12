import * as z from "zod";

const fitnessData = z.object({
    fitnessLevel: z.int(),
    weight: z.int(),
    reps: z.int(),
    one_rep_maz: z.int(),
})
export default fitnessData;