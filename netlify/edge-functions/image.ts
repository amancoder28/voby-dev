import type { Context } from "netlify:edge";

export default async (request: Request, { rewrite }: Context) => {
  const url = new URL(request.url);
  const color = url.searchParams.get("color") ?? "light";
  const corners = url.searchParams.get("corners") ?? "";

  const Image = `/banner${color ? `-${color}` : ""}${
    corners ? `-${corners}` : ""
  }.png`;
  const vobyImage = await rewrite(`/images/${Image}`);

  vobyImage.headers.set(
    "Content-Disposition",
    `filename="voby-logo${color ? `-${color}` : ""}${
      corners ? `-${corners}` : ""
    }.png"`,
  );

  return new Response(vobyImage.body, {
    headers: vobyImage.headers,
  });
};
