import React from 'react'
import { IconButton } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit';
import { ToDo } from '../../types/to-do';

export type EditToDoProps = {
  toggleEditMode: VoidFunction
}

export default function EditToDo({ toggleEditMode}:EditToDoProps) {
  return (
    <IconButton onClick={toggleEditMode}>
      <EditIcon/>
    </IconButton>
  )
}
