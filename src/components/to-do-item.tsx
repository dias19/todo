import React from 'react'
import { Card, CardContent, CardHeader, styled, TextField, Box, Button, Container } from '@mui/material'
import CompleteToDo from './buttons/complete-to-do';
import { useState } from 'react';
import DeleteToDo from './buttons/delete-to-do';
import EditToDo from './buttons/edit-to-do';
import { ToDo } from '../types/to-do';
import { usePutToDoMutation } from '../store/api/to-do-api';

export type ToDoProps = {
    todo: ToDo
}
export default function ToDoItem({ todo }: ToDoProps) {
    const [putToDo] = usePutToDoMutation()
    const CustomTextField = styled(TextField)({
        '& .MuiInputBase-root.Mui-disabled': {
            color: '#2196f3'
        },
    });
    const moment = require('moment')
    const [editMode, setEditMode] = useState(false)
    const [toDo, setToDo] = useState(todo.title)

    async function completeChanges() {
        const postData = {
            id: todo.id,
            toDo: {
                title: toDo,
                completed: false
            }
        }
        const response = await putToDo(postData)
        console.log(response);
        setEditMode(false)
    }
    return (
        <Container>
            <Card sx={{ minWidth: 460, minHeight: 145, m: 1, color: '#2196f3', borderRadius: '50px' }} variant='elevation'>
                <CardHeader
                    title={`Created on: ${moment(todo.updatedAt, 'YYYY-MM-DD HH:mm:ss').format('dddd')}`}
                    action={
                        <>
                            <EditToDo toggleEditMode={() => setEditMode(!editMode)} />
                            <DeleteToDo id={todo.id} />
                            <CompleteToDo todo={todo} />
                        </>
                    }
                />
                <CardContent>
                    <Box display='flex' flexDirection='row' alignItems='center' justifyContent='space-between'>
                        <TextField
                            defaultValue={todo.title}
                            variant='standard'
                            disabled={!editMode}
                            sx={{
                                minWidth: 150,
                                "& .MuiInputBase-input.Mui-disabled": {
                                    WebkitTextFillColor: "#2196f3",
                                },

                            }}
                            onChange={(e) => setToDo(e.target.value)}
                        />
                        {editMode
                            ?
                            <Box>
                                <Button color='success' variant='contained' onClick={completeChanges}>
                                    Complete Changes
                                </Button>
                            </Box>
                            :
                            null}
                    </Box>
                </CardContent>
            </Card>
        </Container>
    )
}
