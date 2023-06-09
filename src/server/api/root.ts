import { createTRPCRouter } from "~/server/api/trpc";
import { exampleRouter } from "~/server/api/routers/example";
import { weatherRouter } from "./routers/weatherRouter";
import { spotifyRouter } from "./routers/spotifyRouter";
import { wakaRouter } from "./routers/wakaRouter";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  example: exampleRouter,
  weather: weatherRouter,
  spotify: spotifyRouter,
  waka: wakaRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
