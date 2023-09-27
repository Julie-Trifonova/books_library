import {configureStore} from "@reduxjs/toolkit";
import allBooksReducer from './booksReducer'

const store = configureStore({
    reducer:
        {
            allBooks: allBooksReducer,
        }
})

export type RootStateType = ReturnType<typeof store.getState>

export default store