import { FastifyReply, FastifyRequest } from "fastify";
import { TypeOf } from "zod";
import { createUserWithDataComingFromDiscordSchema } from "../../routes-schemas/user/create-user-with-data-coming-from-discord-schema";
import { CreateUserUseCase } from "../../../use-cases/user/create-user-controller";
import userPrismaRepositorie from "../../../repositories/user/prisma/user-prisma-repositorie";

type AuthRequest = {
  Body: TypeOf<typeof createUserWithDataComingFromDiscordSchema.schema.body>;
};

type AuthResponse201 = TypeOf<
  (typeof createUserWithDataComingFromDiscordSchema.schema.response)["201"]
>;
type AuthResponse404 = TypeOf<
  (typeof createUserWithDataComingFromDiscordSchema.schema.response)["404"]
>;

export async function AuthController(
  request: FastifyRequest<AuthRequest>,
  reply: FastifyReply
) {
  const { name, avatar, banner, discord } = request.body;

  const createUserUseCase = new CreateUserUseCase(userPrismaRepositorie);

  try {
    const user = await createUserUseCase.execute({
      name,
      avatar,
      banner,
      discord,
    });

    const token = await reply.jwtSign(
      {
        role: user.role
      },
      {
        sign: {
          sub: user.id,
          expiresIn: '30d'
        },
      }
    );

    reply.code(201).send({ token: token, user });
  } catch (error) {
    reply
      .code(404)
      .send({ message: "Internal Server Error" });
  }
}
