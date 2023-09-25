import {bookType} from "../types/types";
import {createSlice} from "@reduxjs/toolkit";
import {booksApi} from "../api/booksApi";

let initialState = {
    allBooks: [] as Array<bookType> | null,
    book: {} as bookType,
    isFetching: true,
    currentPage: 1,
    filter: {
        term: "",
        type: "",
    },
    totalBooksCount: "",
    pageSize: 10,
}

const booksReducer = createSlice({
    name: 'allBooksReducer',
    initialState: initialState,
    reducers: {
        setAllBooks: (state, action) => {
            // state.allBooks = action.allBooks;
            state.allBooks = action.payload;
        },
        setBook: (state, action) => {
            // state.allBooks = action.book;
            state.book = action.payload;
        },
        deleteBook: (state, action) => {
            // state.allBooks = action.allBooks.filter((b: any) => b.id !== action.bookId);
            state.allBooks = action.payload;
        },
        toggleIsFetching: (state, action) => {
            // state.allBooks = action.isFetching;
            state.isFetching = action.payload;
        },
        setFilter: (state, action) => {
            state.filter = action.payload;
        },
        setTotalBooksCount: (state, action) => {
            // state.allBooks = action.totalBooksCount;
            state.totalBooksCount = action.payload;
        },
        setCurrentPage: (state, action) => {
            // state.allBooks = action.currentPage;
            state.currentPage = action.payload;
        }
    }
})

export const {
    setAllBooks,
    setBook,
    deleteBook,
    toggleIsFetching,
    setFilter,
    setTotalBooksCount,
    setCurrentPage
} = booksReducer.actions
export default booksReducer.reducer
export type FilterType = typeof initialState.filter


export const getBooks = (maxResults: number): any => async (dispatch: any) => {
    dispatch(toggleIsFetching(true));
    const data = await booksApi.getAllBooks(maxResults);
    dispatch(toggleIsFetching(false));
    dispatch(setTotalBooksCount(data.length));
};

export const getBooksPage = (
    currentPage: number,
    q: string,
    q_optional: string,
    download: string,
    filter: string,
    langRestrict: string,
    libraryRestrict: string,
    startIndex: number,
    maxResults: number,
    printType: string,
    projection: string,
    orderBy: string,
    partner: string,
    showPreorders: boolean,
    source: string,
): any => async (dispatch: any) => {
    dispatch(toggleIsFetching(true));
    dispatch(setCurrentPage(currentPage));
    dispatch(setFilter(filter));
    const data = await booksApi.getAllBooksPage(
        q,
        q_optional,
        download,
        filter,
        langRestrict,
        libraryRestrict,
        startIndex,
        maxResults,
        printType,
        projection,
        orderBy,
        partner,
        showPreorders,
        source,
    );
    dispatch(toggleIsFetching(false));
    dispatch(setAllBooks(data));
};