import RequireAuth from "./require-auth"
import { Route } from "react-router"
import Tasks from "../components/tasks"
import ListTodos from "../components/list-todos"
import CompletedTasks from "../components/completed-tasks"
export const ProtectedRoutes = [
    <Route element={<RequireAuth />}>
        <Route path='/todos' element={<Tasks />}>
            <Route path='completed' element={<CompletedTasks />} />
            <Route path='inProgress' element={<ListTodos />} />
        </Route>
    </Route>
]