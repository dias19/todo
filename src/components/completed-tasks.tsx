import { Typography } from '@mui/material'
import React from 'react'
import { Container,Card, CardHeader, CardContent, ThemeProvider,Box, TextField } from '@mui/material'
import { useGetFilteredTasks } from '../hooks/useGetFilteredTasks'
export default function CompletedTasks() {
    const completedToDos=useGetFilteredTasks(true)
    const moment=require('moment')
  return (
    <>
    {
        completedToDos.length>0
        ?
        <>
        {completedToDos.map((todo)=> ((
            <>
            <Card sx={{ minWidth: 460, minHeight: 145, m: 1, borderRadius:'50px', color:'#2196f3'}} variant='elevation'>
                <CardHeader
                    title={`Completed on: ${moment(todo.updatedAt, 'YYYY-MM-DD HH:mm:ss').format('dddd')}`}
                />
                <CardContent>
                        <Box display='flex' flexDirection='row' alignItems='center'  justifyContent='space-between'>
                            <Typography variant='h5'>
                                Task Title: {todo.title}
                            </Typography>
                        </Box>
                </CardContent>
            </Card>
            </>
        )))}
        </>
        : <Typography align='center' variant='h5'> No completed tasks were found</Typography>
    }
    </>
  )
}
