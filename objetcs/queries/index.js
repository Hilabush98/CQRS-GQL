import {resolverBook, typeDefBook} from "./Books.js";
import { resolverClient, typeDefClient } from "./Clients.js";

const typeDefsQueries = [typeDefBook,typeDefClient]
const resolversQueries = [resolverClient, resolverBook];

export {typeDefsQueries, resolversQueries};