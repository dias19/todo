import { AppBar, Toolbar, Stack, Button } from "@mui/material";
import { useAppDispatch } from '../hooks/hooksRedux'
import { useNavigate } from 'react-router'
import { logout } from '../store/authorization-slice'
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';

export default function Navbar() {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    function handleSubmit() {
        dispatch(logout())
        navigate('/')
    }
    return (
        <AppBar sx={{ height: '64px' }}>
            <Toolbar>
                <AssignmentTurnedInIcon />
                <Button 
                variant='text' 
                size='large'
                 sx={{ my: 2, color: 'white', display: 'block' }}
                 onClick={()=> navigate('/todos/completed')}
                 >
                    Completed Tasks
                </Button>
                <Button 
                variant='text' 
                size='large'
                 sx={{ my: 2, color: 'white', display: 'block' }}
                 onClick={()=> navigate('/todos/inProgress')}
                 >
                    In-progress tasks
                </Button>
                <Button 
                onClick={handleSubmit} 
                variant='text' 
                size='large'
                 sx={{ my: 2, color: 'white', display: 'block' }}>
                    Logout
                </Button>
            </Toolbar>
        </AppBar>
    )
}
