import {bookType} from "../types/types";
import {createSlice} from "@reduxjs/toolkit";
import {booksApi} from "../api/booksApi";

let initialState = {
    allBooks: [5,5] as Array<bookType> | null | any,
    book: {} as bookType,
    isFetching: true,
    currentPage: 1,
    totalBooksCount: 0,
    searchBooksCount: 0,
    q: 'alice',
    q_optional: '',
    download: '',
    filter: 'partial',
    langRestrict: '',
    libraryRestrict: 'no-restrict',
    startIndex: 0,
    maxResults: 10,
    printType: 'all',
    projection: 'full',
    orderBy: 'relevance',
    partner: '',
    showPreorders: false,
    source: '',
}

const booksReducer = createSlice({
    name: 'allBooksReducer',
    initialState: initialState,
    reducers: {
        setAllBooks: (state, action) => {
            // state.allBooks = action.allBooks;
            console.log(action, 'action books')
            state.allBooks = action.payload.allBooks;
        },
        setDeleteBook: (state, action) => {
            // state.allBooks = action.allBooks.filter((b: any) => b.id !== action.bookId);
            state.allBooks = action.payload;
        },
        setBook: (state, action) => {
            // state.allBooks = action.book;
            state.book = action.payload;
        },
        setToggleIsFetching: (state, action) => {
            // state.allBooks = action.isFetching;
            state.isFetching = action.payload;
        },
        setCurrentPage: (state, action) => {
            // state.allBooks = action.currentPage;
            state.currentPage = action.payload;
        },
        setTotalBooksCount: (state, action) => {
            // state.allBooks = action.totalBooksCount;
            state.totalBooksCount = action.payload;
        },
        setSearchBooksCount: (state, action) => {
            // state.searchBooksCount = action.searchBooksCount;
            state.searchBooksCount = action.payload;
        },
        setQ: (state, action) => {
            // state.q = action.q;
            state.q = action.payload;
        },
        setQ_optional: (state, action) => {
            // state.q_optional = action.q_optional;
            state.q_optional = action.payload;
        },
        setDownload: (state, action) => {
            // state.download = action.download;
            state.download = action.payload;
        },
        setFilter: (state, action) => {
            state.filter = action.payload;
        },
        setLangRestrict: (state, action) => {
            // state.langRestrict = action.langRestrict;
            state.langRestrict = action.payload;
        },
        setLibraryRestrict: (state, action) => {
            // state.libraryRestrict = action.libraryRestrict;
            state.libraryRestrict = action.payload;
        },
        setStartIndex: (state, action) => {
            // state.startIndex = action.startIndex;
            state.startIndex = action.payload;
        },
        setMaxResults: (state, action) => {
            // state.maxResults = action.maxResults;
            state.maxResults = action.payload;
        },
        setPrintType: (state, action) => {
            // state.printType = action.printType;
            state.printType = action.payload;
        },
        setProjection: (state, action) => {
            // state.projection = action.projection;
            state.projection = action.payload;
        },
        setOrderBy: (state, action) => {
            // state.orderBy = action.orderBy;
            state.orderBy = action.payload;
        },
        setPartner: (state, action) => {
            // state.partner = action.partner;
            state.partner = action.payload;
        },
        setShowPreorders: (state, action) => {
            // state.showPreorders = action.showPreorders;
            state.showPreorders = action.payload;
        },
        setSource: (state, action) => {
            // state.source = action.source;
            state.source = action.payload;
        },
    }
})

export const { setAllBooks, setDeleteBook, setBook, setToggleIsFetching, setCurrentPage, setTotalBooksCount, setSearchBooksCount, setQ, setQ_optional, setDownload, setFilter, setLangRestrict, setLibraryRestrict, setStartIndex, setMaxResults, setPrintType, setProjection, setOrderBy, setPartner, setShowPreorders, setSource }
    = booksReducer.actions
export default booksReducer.reducer

export const getBooksPage = ({currentPage = 1, q = 'alice', q_optional = '', download = '', filter = 'partial', langRestrict = '', libraryRestrict = 'no-restrict', startIndex = 0, maxResults = 10, printType = 'all', projection = 'full', orderBy = 'relevance', partner = '', showPreorders = false, source = ''})
    : any => async (dispatch: any) => {
    dispatch(setToggleIsFetching(true));

    const data = await booksApi.getAllBooksPage({q, q_optional, download, filter, langRestrict, libraryRestrict, startIndex, maxResults, printType, projection, orderBy, partner, showPreorders, source});
    console.log(data, 'data in reducer')

    // dispatch(setAllBooks({books: data.items}));
    dispatch(setAllBooks({allBooks: data}));
    // dispatch(setSearchBooksCount({books: data.totalItems}));
    dispatch(setSearchBooksCount(data));
    dispatch(setCurrentPage(currentPage));
    dispatch(setQ(q));
    dispatch(setQ_optional(q_optional));
    dispatch(setDownload(download));
    dispatch(setFilter(filter));
    dispatch(setLangRestrict(langRestrict));
    dispatch(setLibraryRestrict(libraryRestrict));
    dispatch(setStartIndex(startIndex));
    dispatch(setMaxResults(maxResults));
    dispatch(setPrintType(printType));
    dispatch(setProjection(projection));
    dispatch(setOrderBy(orderBy));
    dispatch(setPartner(partner));
    dispatch(setShowPreorders(showPreorders));
    dispatch(setSource(source));

    // setBook, setDeleteBook, setTotalBooksCount
    dispatch(setToggleIsFetching(false));
};