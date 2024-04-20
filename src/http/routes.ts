import { FastifyInstance } from "fastify";
import { ZodTypeProvider } from "fastify-type-provider-zod";
import { string, z } from "zod";

export default async function AppRoutes(app: FastifyInstance) {
  app.withTypeProvider<ZodTypeProvider>().post("/auth", () => {});

  app.withTypeProvider<ZodTypeProvider>().get("/user/ads", () => {});

  app
    .withTypeProvider<ZodTypeProvider>()
    .delete("/user/delete/:adId", () => {});

  app.withTypeProvider<ZodTypeProvider>().post("/ad", () => {});

  app.withTypeProvider<ZodTypeProvider>().get("/ad/:gameId", () => {});

  app.withTypeProvider<ZodTypeProvider>().get(
    "/ad/recents",
    {
      schema: {
        body: {
          date: z.date(),
        },
        response: {
          201: z.array(z.object({
            
          })),
          404: z.object({
            message: z.string(),
          }),
        },
      },
    },
    () => {}
  );

  app.withTypeProvider<ZodTypeProvider>().get(
    "/discord/adId",
    {
      schema: {
        querystring: z.object({
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
        querystring: z.object({
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
    () => {}
  );
}
