import { FastifyInstance } from "fastify";
import { ZodTypeProvider } from "fastify-type-provider-zod";
import { string, z } from "zod";
import { CategoryController } from "./controllers/category-controller";

export default async function AppRoutes(app: FastifyInstance) {
  app.withTypeProvider<ZodTypeProvider>().post(
    "/auth",
    {
      schema: {
        body: z.object({
          name: z.string(),
          avatar: z.string(),
          banner: z.string(),
          discord: z.string(),
        }),
        response: {
          201: z.object({
            token: z.string(),
          }),
          404: z.object({
            message: z.string(),
          }),
        },
      },
    },
    () => {}
  );

  app.withTypeProvider<ZodTypeProvider>().get(
    "/user/ads",
    {
      schema: {
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
    },
    () => {}
  );

  app.withTypeProvider<ZodTypeProvider>().delete(
    "/user/delete/:adId",
    {
      schema: {
        params: {
          adId: z.string().uuid(),
        },
        response: {
          201: z.object({
            message: z.string(),
          }),
          404: z.object({
            message: z.string(),
          }),
        },
      },
    },
    () => {}
  );

  app.withTypeProvider<ZodTypeProvider>().post(
    "/ad",
    {
      schema: {
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
    },
    () => {}
  );

  app.withTypeProvider<ZodTypeProvider>().get(
    "/ads/:gameId",
    {
      schema: {
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
    },
    () => {}
  );

  app.withTypeProvider<ZodTypeProvider>().get(
    "/ad/recents",
    {
      schema: {
        body: {
          date: z.date(),
        },
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
    },
    () => {}
  );

  app.withTypeProvider<ZodTypeProvider>().get(
    "/discord/:adId",
    {
      schema: {
        params: z.object({
          adId: string().uuid(),
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
    },
    () => {}
  );

  app.withTypeProvider<ZodTypeProvider>().get(
    "/games",
    {
      schema: {
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
    },
    () => {}
  );

  app.withTypeProvider<ZodTypeProvider>().get(
    "/famous/game",
    {
      schema: {
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
    },
    () => {}
  );

  app.withTypeProvider<ZodTypeProvider>().get(
    "/game/:categoryId",
    {
      schema: {
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
    },
    () => {}
  );

  app.withTypeProvider<ZodTypeProvider>().get(
    "/category",
    {
      schema: {
        response: {
          201: z.array(
            z.object({
              id: z.string().uuid(),
              name: z.string(),
            })
          ),
          404: z.object({
            message: z.string(),
          }),
        },
      },
    },
    CategoryController
  );
}
