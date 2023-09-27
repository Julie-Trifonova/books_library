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
export const getTotalBooksCount = (state: RootStateType) => {
    return state.allBooks.totalBooksCount
}
export const getSearchBooksCount = (state: RootStateType) => {
    return state.allBooks.searchBooksCount
}
export const getQ = (state: RootStateType) => {
    return state.allBooks.q
}
export const gerQ_optional = (state: RootStateType) => {
    return state.allBooks.q_optional
}
export const getDownload = (state: RootStateType) => {
    return state.allBooks.download
}
export const getFilter = (state: RootStateType) => {
    return state.allBooks.filter
}
export const getLangRestrict = (state: RootStateType) => {
    return state.allBooks.langRestrict
}
export const getLibraryRestrict = (state: RootStateType) => {
    return state.allBooks.libraryRestrict
}
export const getStartIndex = (state: RootStateType) => {
    return state.allBooks.startIndex
}
export const getMaxResults = (state: RootStateType) => {
    return state.allBooks.maxResults
}
export const getPrintType = (state: RootStateType) => {
    return state.allBooks.printType
}
export const getProjection = (state: RootStateType) => {
    return state.allBooks.projection
}
export const getOrderBy = (state: RootStateType) => {
    return state.allBooks.orderBy
}
export const getPartner = (state: RootStateType) => {
    return state.allBooks.partner
}
export const getShowPreorders = (state: RootStateType) => {
    return state.allBooks.showPreorders
}
export const getSource = (state: RootStateType) => {
    return state.allBooks.source
}
