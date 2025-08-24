import { Elysia } from "elysia";
import TeamElysiaApp from "./routes/team";
import SetElysiaApp from "./routes/set";
import RoomElysiaApp from "./routes/room";
export default function startElysia() {
  const app = new Elysia()
    .use(TeamElysiaApp)
    .use(RoomElysiaApp)
    .use(SetElysiaApp)
    .listen(3000);
  return app;
}
