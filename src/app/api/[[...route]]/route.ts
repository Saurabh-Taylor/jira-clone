import { Hono } from "hono";
import { handle } from "hono/vercel";

// export const runtime = "edge";
console.log(process.env.NEXT_RUNTIME); // if i dont use above line i will get nodejs runtime

const app = new Hono().basePath("/api");

app.get("/hello", (c) => {
	return c.json({
		message: "Hello Next.js!",
	});
});

app.get("/hello/:name", (c) => {
	const name = c.req.param("name");
	return c.json({
		message: `Hello, ${name}!`,
	});
});

export const GET = handle(app);
export const POST = handle(app);
