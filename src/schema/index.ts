import { makeSchema } from "nexus";
import path from "path";
import * as UserTypes from "./user";

const cwd = process.cwd();

export const schema = makeSchema({
    types: [UserTypes],
    contextType: {
        export: "Context",
        module: path.join(cwd, "src", "context.ts"),
    },
    outputs: {
        typegen: path.join(cwd, "node_modules", "@types", "nexus-typegen", "index.d.ts"),
    },
});
