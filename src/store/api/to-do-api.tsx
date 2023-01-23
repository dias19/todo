import React from 'react'
import { RootState } from '../store'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { ToDo } from '../../types/to-do'
import { PostToDoRequest } from '../../types/to-do'
import { CompleteToDo } from '../../types/to-do'
import { CreateToDoRequest } from '../../types/to-do'
import { ToDoList } from '../../types/to-do'


export const toDoApi = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3000/todo',
        prepareHeaders: (headers, { getState }) => {
            const token = (getState() as RootState).authorization.token
            if (token) {
                headers.set('Authorization', `Bearer ${token}`)
            }

            return headers
        }
    }),
    reducerPath: 'toDoApi',
    tagTypes: ['ToDo'],
    endpoints: (builder) => ({
        getTodos: builder.query<ToDoList, void | boolean>({
            query: () => '/',
            providesTags: (result) =>
                result
                    ? [
                        ...result.map(({ id}) => ({ type: 'ToDo' as const, id })),
                        { type: 'ToDo', id: 'LIST' },
                    ]
                    : [{ type: 'ToDo', id: 'LIST' }],
        }),
        postToDo: builder.mutation<ToDo, CreateToDoRequest>({
            query: (toDo) => ({
                url: '/',
                method: 'POST',
                body: toDo
            }),
            invalidatesTags: [{ type: 'ToDo', id: 'LIST' }]
        }),
        putToDo: builder.mutation<ToDo, PostToDoRequest>({
            query: (postData) => ({
                url:`/${postData.id}`,
                method: 'PUT',
                body: postData.toDo
            }),
            invalidatesTags:[{type:'ToDo', id:'LIST'}]
        }),
        deleteToDo: builder.mutation<ToDo, number>({
            query: (id)=> ({
                url: `/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags:[{type:'ToDo', id:'LIST'}]
        }),
        completeToDo: builder.mutation<ToDo, CompleteToDo>({
            query: (completeData) => ({
                url: `${completeData.id}`,
                method: 'PUT',
                body: completeData.toDo
            }),
            invalidatesTags: [{type:'ToDo', id: 'LIST'}]
        })
    })
})
export const {
    usePostToDoMutation,
    useGetTodosQuery,
    usePutToDoMutation,
    useDeleteToDoMutation,
    useCompleteToDoMutation
} = toDoApi