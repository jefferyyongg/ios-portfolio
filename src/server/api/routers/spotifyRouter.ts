import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import axios from "axios"

export const spotifyRouter = createTRPCRouter({

    getRecentlyPlayed: publicProcedure.query(async () => {
      const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN;

      const params = new URLSearchParams({
        grant_type: "refresh_token",
        refresh_token: refresh_token || "",
      });

      const authResponse = await fetch("https://accounts.spotify.com/api/token", {
        method: "POST",
        headers: {
          Authorization: `Basic ${Buffer.from(
            `${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`
          ).toString("base64")}`,
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: params,
      });

      if (!authResponse.ok) {
        throw new Error(`Failed to refresh access token: ${authResponse.statusText}`);
      }

      const authJson = await authResponse.json();

      const { data } = await axios.get("https://api.spotify.com/v1/me/player/recently-played", {
        headers: {
          Authorization: `Bearer ${authJson.access_token}`,
        },
      });

      const tracks = data.items.map((item) => {
        return {
          name: item.track.name,
          artist: item.track.artists.map((a) => a.name).join(", "),
          album: item.track.album.name,
          imageUrl: item.track.album.images[0].url,
          url: item.track.external_urls.spotify,
        };
      });
      return tracks;
    }),
  });