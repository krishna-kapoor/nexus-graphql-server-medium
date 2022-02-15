import { objectType } from "nexus";

export * from "./queries";

export const User = objectType({
    name: "User",
    definition(t) {
        t.nonNull.int("id");
        t.nonNull.string("name");
        t.nonNull.string("username");
        t.nonNull.string("email");
        t.nonNull.string("phone");
        t.nonNull.string("website");

        t.nonNull.field("address", {
            type: "Address",
        });
        t.nonNull.field("company", {
            type: "Company",
        });
    },
});

export const Address = objectType({
    name: "Address",
    definition(t) {
        t.nonNull.string("street");
        t.nonNull.string("suite");
        t.nonNull.string("city");
        t.nonNull.string("zipcode");
        t.nonNull.field("geo", {
            type: "Geo",
        });
    },
});

export const Geo = objectType({
    name: "Geo",
    definition(t) {
        t.nonNull.string("lat");
        t.nonNull.string("lng");
    },
});

export const Company = objectType({
    name: "Company",
    definition(t) {
        t.nonNull.string("name");
        t.nonNull.string("catchPhrase");
        t.nonNull.string("bs");
    },
});
