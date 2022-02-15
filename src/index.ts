import { ApolloServer } from "apollo-server-express";
import express from "express";
import { getContext } from "./context";
import { schema } from "./schema";

async function main() {
    const app = express();

    const server = new ApolloServer({
        schema: schema as any,
        context: getContext,
    });

    await server.start();

    server.applyMiddleware({
        app,
        cors: {
            origin: ["https://studio.apollographql.com"],
            credentials: true,
        },
    });

    app.listen(2000, () =>
        console.log(`Server started on http://localhost:2000${server.graphqlPath}`)
    );
}

main().catch(console.error);
