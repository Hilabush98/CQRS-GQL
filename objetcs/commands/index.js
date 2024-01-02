import {resolverBook, typeDefBook} from "./Books.js";
import { resolverClient, typeDefClient } from "./Clients.js";

const typeDefsMutations = [typeDefBook,typeDefClient]
const resolversMutations = [resolverClient, resolverBook];

export {typeDefsMutations, resolversMutations};