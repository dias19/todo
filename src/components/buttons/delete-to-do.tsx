import React from 'react'
import {Button, IconButton} from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import { useDeleteToDoMutation } from '../../store/api/to-do-api';

type DeleteProps={
  id:number
}

export default function DeleteToDo({id}:DeleteProps) {
  const [deleteToDo]=useDeleteToDoMutation()
  
  async function handleDelete(){
    const responseDelete=await deleteToDo(id)
    console.log(responseDelete)
  }

  return (
    <>
    <IconButton color='error' onClick={handleDelete}>
        <DeleteIcon/>
    </IconButton>
    </>
  )
}
