import { configureStore, combineReducers, AnyAction, Reducer } from "@reduxjs/toolkit";
import authorizationReducer from './authorization-slice'
import { authorizationApi } from "./api/authorization-api";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist'
import { toDoApi } from "./api/to-do-api";
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'root',
    storage
}
const combinedReducers = combineReducers({
    authorization: authorizationReducer,
    [authorizationApi.reducerPath]: authorizationApi.reducer,
    [toDoApi.reducerPath]: toDoApi.reducer
})
export type RootState = ReturnType<typeof rootReducer>

const rootReducer: Reducer = (state: RootState, action: AnyAction) => {
    if (action.type === 'authorization/logout') {
        console.log('hi');
        state = {} as RootState;
    }
    return combinedReducers(state, action);
}

const persistedReducer = persistReducer(persistConfig, rootReducer) as typeof rootReducer

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }).concat(authorizationApi.middleware, toDoApi.middleware)
})

export const persistor = persistStore(store)

export type AppDispatch = typeof store.dispatch