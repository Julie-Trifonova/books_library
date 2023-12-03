import {RootStateType} from "./reduxStore";

export const getAllBooks = (state: RootStateType) => {
    return state.booksState.allBooks
}
export const getBook = (state: RootStateType) => {
    return state.booksState.book
}
export const getIsFetching = (state: RootStateType) => {
    return state.booksState.isFetching
}
export const getPageSize = (state: RootStateType) => {
    return state.booksState.pageSize
}
export const getCurrentPage = (state: RootStateType) => {
    return state.booksState.currentPage
}
export const getTotalBooksCount = (state: RootStateType) => {
    return state.booksState.totalBooksCount
}
export const getSearchBooksCount = (state: RootStateType) => {
    return state.booksState.searchBooksCount
}
export const getQ = (state: RootStateType) => {
    return state.booksState.q
}
export const gerQ_optional = (state: RootStateType) => {
    return state.booksState.q_optional
}
export const getDownload = (state: RootStateType) => {
    return state.booksState.download
}
export const getFilter = (state: RootStateType) => {
    return state.booksState.filter
}
export const getLangRestrict = (state: RootStateType) => {
    return state.booksState.langRestrict
}
export const getLibraryRestrict = (state: RootStateType) => {
    return state.booksState.libraryRestrict
}
export const getStartIndex = (state: RootStateType) => {
    return state.booksState.startIndex
}
export const getMaxResults = (state: RootStateType) => {
    return state.booksState.maxResults
}
export const getPrintType = (state: RootStateType) => {
    return state.booksState.printType
}
export const getProjection = (state: RootStateType) => {
    return state.booksState.projection
}
export const getOrderBy = (state: RootStateType) => {
    return state.booksState.orderBy
}
export const getPartner = (state: RootStateType) => {
    return state.booksState.partner
}
export const getShowPreorders = (state: RootStateType) => {
    return state.booksState.showPreorders
}
export const getSource = (state: RootStateType) => {
    return state.booksState.source
}
