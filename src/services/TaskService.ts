import prismaClient from "../prisma";
import { TaskType } from "../types/TaskType";

interface TaskServiceProps {
    id: string
}


class TaskService {
    /* Service contanto directo com o banco d dado  */

    async getAllTask() {
        /* Pegar todas as Task no Banco de dados */
        const responseServiceTask = await prismaClient.tasks.findMany({
            orderBy: [
                {
                    createAt: 'desc', // Ordena por data de cração em ordem descendente
                },
                {
                    isFavorite: 'desc', // Ordena por isFavorite em ordem descendente
                },
                {
                    updateAt: 'desc', // Ordena pela data de alteração em ordem ascendente
                },

            ],

        })


        return responseServiceTask
    }

    /* Adicionar Task ao banco de Dados */
    async ceateTask(data: TaskType) {
        const responseServiceTask = await prismaClient.tasks.create({
            data: {
                ...data
            }
        })


        return responseServiceTask
    }


    async updateTask({ id }: TaskServiceProps) {
        const findTask = await prismaClient.tasks.findFirst({
            where: {
                id: id
            }
        })

        if (!findTask) {
            throw new Error("Tarefa não encontrada!")
        }
    }

    /* Adicionar ao favoritos */
    async handleFavorite({ id }: TaskServiceProps) {
        let isFavoriteCurrent: boolean = true

        console.log("Vai editar ")

        const findTask = await prismaClient.tasks.findFirst({
            where: {
                id: id
            }
        })

        if (!findTask) {
            throw new Error("Tarefa não encontrada!")
        }

        if (findTask.isFavorite) {
            isFavoriteCurrent = false
        }

        const responseServiceTask = await prismaClient.tasks.update({
            where: {
                id: id
            },
            data: {
                isFavorite: isFavoriteCurrent
            }
        })

        return responseServiceTask
    }

    /* Adicionar/ alterar a Cor */
    async handleColor({ id, color }: { id: string, color: string }) {

        const findTask = await prismaClient.tasks.findFirst({
            where: {
                id: id
            }
        })

        if (!findTask) {
            throw new Error("Tarefa não encontrada!")
        }


        const responseServiceTask = await prismaClient.tasks.update({
            where: {
                id: id
            },
            data: {
                color: color
            }
        })

        return responseServiceTask
    }

    /* Apagar uma tarefa */
    async deleteTask({ id }: TaskServiceProps) {

        const findTask = await prismaClient.tasks.findFirst({
            where: {
                id: id
            }
        })

        if (!findTask) {
            throw new Error("Tarefa não encontrada!")
        }

        await prismaClient.tasks.delete({
            where: {
                id: findTask.id
            }
        })


        return { message: "Tarefa Apagada com Sucesso!" }
    }
}

export { TaskService }