import { Context } from "netlify:edge";
import cors from "https://deno.land/x/edge_cors@0.2.1/src/cors.ts";

export default async (request: Request, { json }: Context) => {
  const url = new URL(request.url);
  const type = url.searchParams.get("type") || "banner";

  const imageTypes = {
    "transparent": "banner",
    "light": "banner-light",
    "light-rounded": "banner-light-rounded",
    "dark": "banner-dark",
    "dark-rounded": "banner-dark-rounded",
  };

  //@ts-ignore
  const bannerType = imageTypes[type] ?? "banner";

  const vobyImage = await fetch(
    `https://raw.githubusercontent.com/vobyjs/voby/master/resources/banner/png/${bannerType}.png`,
  );

  return cors(
    request,
    new Response(vobyImage.body, {
      headers: {
        "cache-control": "public, max-age=86400, stale-while-revalidate=86400",
        "content-type": "image/png"
      },
    }),
  );
};
