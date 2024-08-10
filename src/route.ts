import { FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply } from "fastify";
import { TaskController } from "./controllers/TaskController";


export async function routes(fastify: FastifyInstance, options: FastifyPluginOptions) {

    fastify.get("/", async (request: FastifyRequest, reply: FastifyReply) => {
        return {
            Teste: true
        }
    })

    /* All Data  */
    fastify.get("/task", async (request: FastifyRequest, reply: FastifyReply) => {
        return new TaskController().getAllTask(request, reply)
    })
    /*Router  to Create task  */
    fastify.post("/task", async (request: FastifyRequest, reply: FastifyReply) => {
        return new TaskController().ceateTask(request, reply)

    })

    /*Router  to update All Data */

    fastify.put("/task", async (request: FastifyRequest, reply: FastifyReply) => {
        return new TaskController().updateTask(request, reply)

    })

    /*Router  to  set Favorite */

    fastify.put("/task/favorite", async (request: FastifyRequest, reply: FastifyReply) => {
        return new TaskController().handleFavorite(request, reply)
    })

    /*Router  to  set Favorite */

    fastify.put("/task/color", async (request: FastifyRequest, reply: FastifyReply) => {
        return new TaskController().handleColor(request, reply)
    })

    /* Delete task */
    fastify.delete("/task", async (request: FastifyRequest, reply: FastifyReply) => {
        return new TaskController().deleteTask(request, reply)
    })



}