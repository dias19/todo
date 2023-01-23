import { TextField, Box, Button} from '@mui/material'
import { useNavigate } from 'react-router'
import { Container } from '@mui/system'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup'
import { useLoginMutation } from '../../store/api/authorization-api';
import { UserCredentials } from '../../types/to-do';

export default function Login() {
    const [login]=useLoginMutation()
    const RegExPassword = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/
    const navigate = useNavigate()
    const userSchema = yup.object({
        nickname: yup
            .string()
            .required(),
        password: yup
            .string()
            .required()
            .matches(RegExPassword, 'Password must contain eight characters, at least one letter, one number and one special character')
    })
    const { register, handleSubmit, formState: { errors , isValid}} = useForm<UserCredentials>({
        resolver: yupResolver(userSchema)
    })

    async function onSubmit(data:UserCredentials){
        const response=await login(data)
        navigate('/todos/inProgress')
    }
    return (
        <Container>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                <TextField
                    label='Username:'
                    type='text'
                    variant='standard'
                    helperText={errors.nickname?.message}
                    sx={{ m: 0.5 }}
                    {...register("nickname")}
                />
                <TextField
                    label='Password:'
                    type='password'
                    variant='standard'
                    helperText={errors.password?.message}
                    sx={{ m: 0.5 }}
                    {...register("password")}
                />
                <Button
                    variant='contained'
                    size='large'
                    disabled={!isValid}
                    onClick={handleSubmit(onSubmit)}
                    sx={{ borderRadius: '50px', bgcolor: 'green', color: 'white', m: 0.5 }}
                >
                    Login
                </Button>
                <Button
                    variant='contained'
                    size='large'
                    onClick={() => navigate('/register')}
                    sx={{ borderRadius: '50px', bgcolor: 'green', color: 'white', m: 0.5}}
                >
                    Register
                </Button>
            </Box>
        </Container >
    )
}
