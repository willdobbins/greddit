import {MikroORM} from "@mikro-orm/core"
import {Post} from "./entities/Post";
import microConfig from "./mikro-orm.config";

const main = async () => {
    const orm = await MikroORM.init(microConfig);
    const post = orm.em.create(Post, {title: "Test Post"});
    await orm.em.persistAndFlush(post);
};

main().catch( err => {
    console.error(err);
});
