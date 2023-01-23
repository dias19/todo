import { createSlice } from '@reduxjs/toolkit'
import { authorizationApi } from './api/authorization-api'
type tokenState = {
    token: string | null
}
export const authorizationSlice = createSlice({
    name: 'authorization',
    initialState: { token: null } as tokenState,
    reducers: {
        logout: (state) => {
        }
    },
    extraReducers: (builder) => {
        builder.addMatcher(
            authorizationApi.endpoints.login.matchFulfilled,
            (state, { payload }) => {
                state.token = payload.token
            }
        )
        builder.addMatcher(
            authorizationApi.endpoints.registerUser.matchFulfilled,
            (state, { payload }) => {
                state.token = payload.token
            }
        )
    }
})
export const { logout} = authorizationSlice.actions
export default authorizationSlice.reducer
