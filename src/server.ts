import fastify from "fastify";
import { env } from "./env";
import AppRoutes from "./http/routes";
import { ZodError } from "zod";
import {
  serializerCompiler,
  validatorCompiler,
} from "fastify-type-provider-zod";

const app = fastify();

app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);

app.register(AppRoutes);
app.setErrorHandler((error, _, reply) => {
  if (error instanceof ZodError) {
    return reply
      .status(401)
      .send({ error: "Validate Zod Error", issues: error.format() });
  }

  return reply.status(500).send("Internal Server Error");
});

app
  .listen({ port: env.NODE_PORT, path: "0.0.0.0" })
  .then(() =>
    console.log(`🧙‍♂️Server Online: http://localhost:${env.NODE_PORT}`)
  );
