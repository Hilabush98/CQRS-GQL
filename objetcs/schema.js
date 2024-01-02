import { makeExecutableSchema }  from "graphql-tools";
import {typeDefsQueries, resolversQueries} from "./queries/index.js"
import {typeDefsMutations, resolversMutations} from "./commands/index.js"
const typeDefs=[typeDefsQueries, typeDefsMutations];
const resolvers=[resolversQueries, resolversMutations];

export default makeExecutableSchema({typeDefs,resolvers});