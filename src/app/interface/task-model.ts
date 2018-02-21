// Model to be used by our app for storing task data.

export interface TaskModel {
    id: number,
    taskName: string,
    taskDescription: string
    taskDueDate: Date
}
