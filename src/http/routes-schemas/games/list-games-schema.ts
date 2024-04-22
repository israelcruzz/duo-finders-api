import { z } from "zod";

export const listGamesSchema = {
    schema: {
      summary: "List Games",
      tags: ["games"],
      headers: z.object({
        authorization: z.string()
      }),
      querystring: z.object({
        query: z.coerce.string(),
        page: z.coerce.number().default(1),
      }),
      response: {
        201: z.array(
          z.object({
            id: z.string(),
            name: z.string(),
            image: z.string(),
            description: z.string(),
            category: z.string(),
          })
        ),
        404: z.object({
          message: z.string(),
        }),
      },
    },
  };