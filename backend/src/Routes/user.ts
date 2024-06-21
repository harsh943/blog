import { Hono } from "hono";
import { PrismaClient } from '@prisma/client/edge';
import { withAccelerate } from '@prisma/extension-accelerate';
import { sign } from 'hono/jwt';
import { signupInput, signinInput } from "@harsh859/blog-common";

export const userRouter = new Hono<{
    Bindings: {
        DATABASE_URL: string;
        JWT_SECRET: string;
    }
}>();

userRouter.post('/signup', async (c) => {
    try {
        const body = await c.req.json();
        const { success, error } = signupInput.safeParse(body);
        if (!success) {
            c.status(400);  // Changed to 400 Bad Request
            return c.json({
                message: "Inputs not correct",
                error
            });
        }

        const prisma = new PrismaClient({
            datasourceUrl: c.env.DATABASE_URL,
        }).$extends(withAccelerate());

        const user = await prisma.user.create({
            data: {
                username: body.username,
                password: body.password,
                name: body.name
            }
        });

        const jwt = await sign(
            {
                id: user.id
            },
            c.env.JWT_SECRET
        );

        return c.text(jwt);
    } catch (e) {
        console.log(e);
        c.status(500);  // Changed to 500 Internal Server Error
        return c.text('Server Error');
    }
});

userRouter.post('/signin', async (c) => {
    try {
        const body = await c.req.json();
        const { success, error } = signinInput.safeParse(body);
        if (!success) {
            c.status(400);  // Changed to 400 Bad Request
            return c.json({
                message: "Inputs not correct",
                error
            });
        }

        const prisma = new PrismaClient({
            datasourceUrl: c.env.DATABASE_URL,
        }).$extends(withAccelerate());

        const user = await prisma.user.findFirst({
            where: {
                username: body.username,
                password: body.password,
            }
        });

        if (!user) {
            c.status(403);  // 403 Forbidden for incorrect credentials
            return c.json({
                message: "Incorrect credentials"
            });
        }

        const jwt = await sign(
            {
                id: user.id
            },
            c.env.JWT_SECRET
        );

        return c.text(jwt);
    } catch (e) {
        console.log(e);
        c.status(500);  // Changed to 500 Internal Server Error
        return c.text('Server Error');
    }
});
