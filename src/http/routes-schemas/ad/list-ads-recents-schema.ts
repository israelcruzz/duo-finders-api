import { z } from "zod";

export const listAdsRecentsSchema = {
  schema: {
    summary: "List ads recents",
    tags: ["ad"],
    params: z.object({
      date: z.date(),
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
          game: z.object({
            id: z.string().uuid(),
            name: z.string(),
            image: z.string(),
            description: z.string(),
            category: z.string(),
          }),
        })
      ),
      404: z.object({
        message: z.string(),
      }),
    },
  },
};