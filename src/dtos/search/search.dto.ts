import z from 'zod';

const SearchDTO = z.object({
  search: z.string().array().min(1)
});

export default SearchDTO;
