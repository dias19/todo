import React, { useState } from 'react'
import { TextField, Box, IconButton } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import { usePostToDoMutation } from '../store/api/to-do-api';

export default function SearchBar() {
    const [title, setTitle] = useState('')
    const [postToDo] = usePostToDoMutation()
    async function handleAdd() {
        if (title===''){
            return alert('Please add a task name')
        }
        else{
            const toDo={
                title:title,
                completed: false
            }
            const response=await postToDo(toDo)
            console.log(response);
            setTitle('')
        }
    }
    return (
        <Box display='flex' justifyContent='center' alignItems='center' sx={{
            marginTop: '15vh', flexDirection: 'row', minWidth:460
        }}>
            <Box display='flex' flexDirection='column'>
                <TextField
                    type='text'
                    variant='outlined'
                    value={title}
                    label='Provide a task'
                    onChange={(e) => setTitle(e.target.value)}
                    sx={{
                        minWidth:390
                    }}
                />
            </Box>
            <IconButton size='large'
                onClick={handleAdd}
                sx={{
                    m: 2,
                    bgcolor: '#2196f3',
                    "&.MuiButtonBase-root:hover": {
                        bgcolor: "#2196f3"
                    }
                }}>
                <AddIcon/>
            </IconButton>
        </Box>
    )
}
