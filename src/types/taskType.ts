export type TaskType = {
    id: string,
    title: string,
    description: string,
    isFavorite: boolean,
    color: string,
    createAt?: Date,
    updateAt?: Date
}