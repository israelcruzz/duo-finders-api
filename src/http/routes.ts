import { FastifyInstance } from "fastify";
import { ZodTypeProvider } from "fastify-type-provider-zod";
import { string, z } from "zod";
import { CategoryController } from "./controllers/category-controller";
import { ListGamesCategory } from "./controllers/list-games-category";
import { ListGamesMostAds } from "./controllers/list-games-most-ads";
import { ListGames } from "./controllers/list-games";
import { ShowDiscordAd } from "./controllers/show-discord-ad";
import { ListRecentAds } from "./controllers/list-recent-ads";
import { ListAdsGame } from "./controllers/list-ads-game";
import { CreateAd } from "./controllers/create-ad";
import { DeleteAd } from "./controllers/delete-ad";
import { UserAds } from "./controllers/user-ads";
import { Auth } from "./controllers/auth";

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
    Auth
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
    UserAds
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
    DeleteAd
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
    CreateAd
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
    ListAdsGame
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
    ListRecentAds
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
    ShowDiscordAd
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
    ListGames
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
    ListGamesMostAds
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
    ListGamesCategory
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
