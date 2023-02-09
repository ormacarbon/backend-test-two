import z from 'zod';

const MenuDTO = z.object({
  name: z.string(),
  description: z.string().optional(),
  ingredients: z.array(z.string()).nonempty({
    message: 'add min: 1'
  })
});

export interface MenuDTOInterface {
  name: string;
  description: string | undefined;
  ingredients: string[];
  owner: string;
  id?: string;
}

export default MenuDTO;
