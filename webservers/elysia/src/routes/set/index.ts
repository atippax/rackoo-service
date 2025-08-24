import Elysia from "elysia";
const SetElysiaApp = new Elysia()
  .get("set", () => {})
  .get("/set/:id", ({ params: { id } }) => {})
  .delete("/set/:id", ({ params: { id } }) => {});
export default SetElysiaApp;
