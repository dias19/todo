import { useGetTodosQuery } from "../store/api/to-do-api"
export const useGetFilteredTasks= (completed:boolean) => {
    const {data: todos=[]}=useGetTodosQuery()
    if (completed){
        return todos.filter(todo=> todo.completed)
    }
    else{
        console.log(todos.filter(todo=> !todo.completed))
        return todos.filter(todo=> !todo.completed)
    }
}