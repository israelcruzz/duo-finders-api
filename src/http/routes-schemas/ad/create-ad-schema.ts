import { z } from "zod";

export const createAdSchema = {
  schema: {
    summary: "Create Ad",
    tags: ["ad"],
    headers: z.object({
      authorization: z.string()
    }),
    body: z.object({
      id: z.string().uuid(),
      name: z.string(),
      yearPlaying: z.number(),
      discord: z.string(),
      weekDays: z.string(),
      hoursStart: z.number(),
      hoursEnd: z.number(),
      useVoiceChannel: z.boolean(),
      createdAt: z.date(),
    }),
    response: {
      201: z.object({
        message: z.string(),
      }),
      404: z.object({
        message: z.string(),
      }),
    },
  },
};
