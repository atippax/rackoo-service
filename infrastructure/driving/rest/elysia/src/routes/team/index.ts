import Elysia from "elysia";
const TeamElysiaApp = new Elysia()
  .post("/team", ({ body }) => {})
  .delete("/team/:id", ({ params: { id } }) => {})
  .get("/team/", () => {})
  .get("/team/:id", ({ params: { id } }) => {});
export default TeamElysiaApp;
