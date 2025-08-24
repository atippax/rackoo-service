import Elysia from "elysia";
const RoomElysiaApp = new Elysia()
  .get("/room", () => {})
  .get("/room/:id", ({ params: { id } }) => {})
  .delete("/room/:id", ({ params: { id } }) => {})
  .post("/room", ({ body }) => {});
export default RoomElysiaApp;
