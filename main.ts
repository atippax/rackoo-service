import startElysia from "./webservers/elysia/src";
const app = startElysia();
console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
