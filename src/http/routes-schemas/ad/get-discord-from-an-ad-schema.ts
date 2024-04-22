import { z } from "zod";

export const getDiscordFromAnAdSchema = {
  schema: {
    summary: "Get discord from an ad",
    tags: ["ad"],
    params: z.object({
      adId: z.string().uuid(),
    }),
    response: {
      201: z.object({
        discordName: z.string(),
      }),
      404: z.object({
        message: z.string(),
      }),
    },
  },
};