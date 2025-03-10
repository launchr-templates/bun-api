import { createServer } from "./utils/serverFactory";

const server = createServer({
  fetch(req) {
    return new Response("Hello World");
  },
});

console.log(`🚀 Server running at ${server.url}`);
