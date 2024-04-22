import { z } from "zod";

export const listGamesByCategogySchema = {
  schema: {
    summary: "List games by category",
    tags: ["games"],
    headers: z.object({
      Authorization: z.string().uuid()
    }),
    params: z.object({
      categoryId: z.string().uuid(),
    }),
    response: {
      201: z.array(
        z.object({
          id: z.string(),
          name: z.string(),
          image: z.string(),
          description: z.string(),
        })
      ),
      404: z.object({
        message: z.string(),
      }),
    },
  },
};
