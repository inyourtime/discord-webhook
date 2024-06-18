import fastify from "fastify";

const app = fastify();

app.get("/", async (request, reply) => {
  console.log("Hello World!");
  return "Hello World!";
});

export default async (req, res) => {
  await app.ready();
  app.server.emit("request", req, res);
};
