import React from 'react'

export type ToDo = {
    id: number,
    title: string,
    completed: boolean,
    userId: number,
    createdAt: string,
    updatedAt: string
}
export type PostToDoRequest = {
    id: number,
    toDo: {
        title: string,
        completed: boolean
    }
}
export type CompleteToDo = {
    id: number,
    toDo: {
        completed: boolean,
        title: string
    }
}

export type AuthorizationResponse={
    token:string
}

export type UserCredentials = {
    nickname: string,
    password: string
}

export type CreateToDoRequest = Omit<ToDo, 'id' | 'userId' | 'createdAt' | 'updatedAt'>
export type ToDoList = ToDo[]