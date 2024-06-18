/** @type {import('fastify').FastifyPluginAsync} */
export default async function routes(app, opts) {
  app.get("/", async (request, reply) => {
    const name = request.query.name || "World";
    return { hello: `Hello ${name}!` };
  });
}
