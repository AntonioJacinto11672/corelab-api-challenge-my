import { FastifyReply, FastifyRequest } from "fastify";
import { TaskType } from "../types/TaskType";
import { TaskService } from "../services/TaskService";

const useTaskservice = new TaskService()
class TaskController {

    /* Pegar todas as Task */
    async getAllTask(request: FastifyRequest, reply: FastifyReply) {
        const responseControllerTask = await useTaskservice.getAllTask()

        reply.send(responseControllerTask)
    }

    /* Adicionar Task */
    async ceateTask(request: FastifyRequest, reply: FastifyReply) {
        const data: TaskType = request.body as TaskType

        console.log("Data ", data)

        /* Verificar se os dados estão vazio */
        if (!data) {
            throw new Error("Preecha todos os Campos!")
        } else {
            if (!data.title) {
                throw new Error("O título é necessario!")
            } else if (!data.description) {
                throw new Error("Adiciona conteudo...")
            } 
        }

        const responseControllerTask = await useTaskservice.ceateTask(data)

        reply.send(responseControllerTask)

    }

    async updateTask(request: FastifyRequest, reply: FastifyReply) {

    }

    async handleFavorite(request: FastifyRequest, reply: FastifyReply) {
        const { id } = request.body as { id: string }

        console.log("O Id do Favorito", request.body)

        if (!id || (id == undefined)) {
            throw new Error("O Id é necessario!")
        }

        const responseControllerTask = await useTaskservice.handleFavorite({ id })


        reply.send(responseControllerTask)
    }

    async handleColor(request: FastifyRequest, reply: FastifyReply) {

        const { id, color } = request.body as { id: string, color: string }

        console.log("O Id", id)

        if (!id) {
            throw new Error("O Id é necessario!")
        }

        const responseControllerTask = await useTaskservice.handleColor({ id, color })


        reply.send(responseControllerTask)
    }


    async deleteTask(request: FastifyRequest, reply: FastifyReply) {

        const { id } = request.query as { id: string }

        console.log("O Id", id)

        if (!id) {
            throw new Error("O Id é necessario!")
        }

        const responseControllerTask = await useTaskservice.deleteTask({ id })


        reply.send(responseControllerTask)

    }
}

export { TaskController }