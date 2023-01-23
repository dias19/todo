import React from 'react'
import { IconButton } from '@mui/material'
import DoneIcon from '@mui/icons-material/Done';
import { useCompleteToDoMutation } from '../../store/api/to-do-api';
import { ToDoProps } from '../../types/to-do';

export default function CompleteToDo({todo}:ToDoProps) {
  const [completeToDo]=useCompleteToDoMutation()
  async function handleSubmit(){
    const completedData={
      id:todo.id,
      toDo:{
      completed: true,
      title:todo.title
      }
    }
    const completeResponse=await completeToDo(completedData)
    console.log(completeResponse);
  }
  return (
    <IconButton color='success' onClick={handleSubmit}>
        <DoneIcon/>
    </IconButton>
  )
}
