import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";

export default async function AppRoutes(app: FastifyInstance) {
    app.get('/', (request: FastifyRequest, reply: FastifyReply) => {
        reply.send({ message: 'server online' })
    })
}