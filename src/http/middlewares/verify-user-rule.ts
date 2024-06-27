import { FastifyReply, FastifyRequest } from "fastify";

export async function verifyUserRole(onlyRole: "MEMBER" | "ADMIN") {
  return (request: FastifyRequest, reply: FastifyReply) => {
    const { role } = request.user;

    if (role !== onlyRole) {
      return reply.status(401).send({ message: "Unauthorized" });
    }
  };
}
