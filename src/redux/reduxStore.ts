import {configureStore} from "@reduxjs/toolkit";
import allBooksReducer from './booksReducer'
import {reducer as formReducer} from 'redux-form'

const store = configureStore({
    reducer:
        {
            booksState: allBooksReducer,
            // formState: formReducer,
        }
})

export type RootStateType = ReturnType<typeof store.getState>

export default store