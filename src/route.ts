import { FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply } from "fastify";


export async function routes(fastify: FastifyInstance, options: FastifyPluginOptions) {

    fastify.get("/", async (request: FastifyRequest, reply: FastifyReply) => {
        return {
            ok: true
        }
    })

    /* All Data  */
    fastify.get("/task", async (request: FastifyRequest, reply: FastifyReply) => {
        return {
            ok: true
        }
    })
    /*Router  to Create task  */
    fastify.post("/task", async (request: FastifyRequest, reply: FastifyReply) => {
        return {
            ok: "Create Task"
        }
    })

    /*Router  to update All Data */

    fastify.put("/task", async (request: FastifyRequest, reply: FastifyReply) => {

    })

    /*Router  to  set Favorite */

    fastify.put("/task/favorite", async (request: FastifyRequest, reply: FastifyReply) => {

    })

    /* Delete task */
    fastify.delete("/task", async (request: FastifyRequest, reply: FastifyReply) => {

    })

    

}