const fastify = require("fastify");

const app = fastify();

app.get("/", async (request, reply) => {
  console.log("Hello World!");
  return "Hello World!";
});

module.exports = async (req, res) => {
  await app.ready();
  app.server.emit("request", req, res);
};
