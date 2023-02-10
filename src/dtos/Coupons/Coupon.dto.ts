import z from 'zod';

const VALUES = ['ACTIVE', 'CLOSED'] as const;

const CouponDTO = z.object({
  name: z.string(),
  description: z.string(),
  discount_max: z.number(),
  created_by: z.string(),
  status: z.enum(VALUES).default('ACTIVE'),
  found_on: z.object({
    website: z.string(),
    name: z.string()
  })
});

export default CouponDTO;
