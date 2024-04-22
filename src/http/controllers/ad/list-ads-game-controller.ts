import { FastifyReply, FastifyRequest } from "fastify";
import { TypeOf } from "zod";
import { listGamesSchema } from "../../routes-schemas/games/list-games-schema";

type ListAdsGameRequest = {
    Querystring: TypeOf<typeof listGamesSchema.schema.querystring>
}

export async function ListAdsGameController(request: FastifyRequest<ListAdsGameRequest>, reply: FastifyReply) {
    request.query
}