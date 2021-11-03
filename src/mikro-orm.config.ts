import {Post} from "./entities/Post";
import {__prod__} from "./constants";
import { MikroORM } from "@mikro-orm/core";
import path from 'path';

export default {
    migrations: {
        path: path.join(__dirname, "./migrations"),
        pattern: /^[\w-]+\d_\.[tj]s$/,
    },
    dbName: 'greddit',
    entities: [Post],
    user: 'postgres',
    password: 'mysecretpassword',
    debug: !__prod__,
    type: 'postgresql'
} as Parameters<typeof MikroORM.init>[0];
