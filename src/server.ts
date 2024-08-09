import Fastify from "fastify";
import cors from "@fastify/cors";
import { routes } from "./route";

//Init server

const app = Fastify({
    logger: true
})

const start = async () => {
    //fetch routes and acept cors comunication with athor app
    await app.register(cors)
    await app.register(routes)

    try {

        //app backend listem port 8000
        await app.listen({ port: 8000 })
    } catch (error) {
        process.exit()
    }
}


start()