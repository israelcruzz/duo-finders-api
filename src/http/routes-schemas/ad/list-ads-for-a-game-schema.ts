import { z } from "zod";

export const listAdsForAGameSchema = {
  schema: {
    summary: "List ads for a game",
    tags: ["ad"],
    params: z.object({
      gameId: z.string().uuid(),
    }),
    querystring: z.object({
      page: z.coerce.number(),
    }),
    response: {
      201: z.array(
        z.object({
          id: z.string().uuid(),
          name: z.string(),
          yearPlaying: z.number(),
          discord: z.string(),
          weekDays: z.string(),
          hoursStart: z.number(),
          hoursEnd: z.number(),
          useVoiceChannel: z.boolean(),
          createdAt: z.date(),
        })
      ),
      404: z.object({
        message: z.string(),
      }),
    },
  },
};