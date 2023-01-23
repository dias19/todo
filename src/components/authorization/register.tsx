import {yupResolver} from '@hookform/resolvers/yup'
import { TextField, Button, Box} from '@mui/material'
import * as yup from 'yup'
import {useForm} from 'react-hook-form'
import { useRegisterUserMutation } from '../../store/api/authorization-api'
import { useNavigate } from 'react-router'
import { UserCredentials } from '../../types/to-do'

export default function RegisterUser() {
    const navigate=useNavigate()
    const RegExPassword = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/
    const [registerUser]=useRegisterUserMutation()
    const registrationSchema=yup.object({
        nickname:yup.string().required(),
        password: yup.string().matches(RegExPassword, 'Please create a strong passwod')
    })
    const {register, handleSubmit, formState:{errors}}=useForm<UserCredentials>({
        resolver: yupResolver(registrationSchema)
    })
    async function onSubmit(data:UserCredentials){
        const response=await registerUser(data)
        navigate(-1)
    }
    return (
        <Box display='flex' sx={{justifyContent:'center', alignItems:'center', flexDirection:'column'}}>
            <TextField
                label='Username:'
                type='email'
                variant='standard'
                helperText={errors.nickname?.message}
                sx={{ m: 0.5 }}
                {...register("nickname")}
            />
             <TextField
                label='Password'
                type='password'
                variant='standard'
                helperText={errors.password?.message}
                sx={{ m: 0.5 }}
                {...register("password")}
            />
            <Button
                variant='contained'
                size='large'
                onClick={handleSubmit(onSubmit)}
                sx={{ borderRadius: '50px', bgcolor: 'green', color: 'white', m: 0.5 }}
            >
                Register
            </Button>
        </Box>
    )
}
