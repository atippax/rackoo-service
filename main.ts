import startElysia from "./infrastructure/driving/rest/elysia/src";
const app = startElysia();
console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
