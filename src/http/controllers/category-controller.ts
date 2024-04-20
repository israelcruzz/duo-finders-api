import { FastifyReply, FastifyRequest } from "fastify";
import { prisma } from "../../lib/prisma";

export async function CategoryController(request: FastifyRequest, reply: FastifyReply) {
    prisma.ad.findMany({
        where: {
            
        }
    })
}