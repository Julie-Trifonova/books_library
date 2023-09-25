import {RootStateType} from "./reduxStore";

export const getAllBooks = (state: RootStateType) => {
    return state.allBooks.allBooks
}
export const getBook = (state: RootStateType) => {
    return state.allBooks.book
}
export const getIsFetching = (state: RootStateType) => {
    return state.allBooks.isFetching
}
export const getCurrentPage = (state: RootStateType) => {
    return state.allBooks.currentPage
}
export const getFilter = (state: RootStateType) => {
    return state.allBooks.filter
}
export const getTotalBooksCount = (state: RootStateType) => {
    return state.allBooks.totalBooksCount
}
export const getPageSize = (state: RootStateType) => {
    return state.allBooks.pageSize
}