import axios from "axios";
import { extendType, list } from "nexus";
import { User } from "../types";

// https://jsonplaceholder.typicode.com/users

const url = "https://jsonplaceholder.typicode.com/users";

export const UserQueries = extendType({
    type: "Query",
    definition(t) {
        t.nonNull.field("users", {
            type: list("User"),
            async resolve() {
                const { data } = await axios.get<User[]>(url);

                return data;
            },
        });
    },
});
