import { z } from 'zod'
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import axios from "axios"

export const weatherRouter = createTRPCRouter({
    getWeather: publicProcedure.input(
        z.object({
            key: z.string(),
            q: z.string(),
        }))
    .query(async ({ input }) => {
        const { key, q } = input;
        const { data } = await axios.get("http://api.weatherapi.com/v1/current.json", {
            params: {
                key,
                q,
            },
        })
        return data;
    })
})
