import { z } from "zod";

export const listFamousGamesSchema = {
  schema: {
    summary: "List Famous Games",
    tags: ["games"],
    headers: z.object({
      Authorization: z.string().uuid()
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
