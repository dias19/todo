import { Box, Typography, Card, CardContent, CardHeader, TextField, ThemeProvider, createTheme} from '@mui/material';
import ToDoItem from './to-do-item';
import { useGetFilteredTasks } from '../hooks/useGetFilteredTasks';
export default function ListTodos() {
  const toDos=useGetFilteredTasks(false)
  return (
    <Box display='flex' flexDirection='column' sx={{marginTop:'50px'}}>
      <Typography align='center' variant='h4'>Tasks list:</Typography>
      {
        toDos.length>0 
        ?
        <>
        {toDos?.map(todo => (
          <ToDoItem todo={todo} />
        ))}
        </>
        :
        <Typography align='center' variant='h6'>No tasks found</Typography>
      }
    </Box>
  )
}
