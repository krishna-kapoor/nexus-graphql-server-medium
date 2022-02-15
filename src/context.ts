import { ExpressContext } from "apollo-server-express";

export function getContext(context: ExpressContext) {
    return context;
}

export type Context = ExpressContext;
