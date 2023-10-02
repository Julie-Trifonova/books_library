import {bookType} from "../types/types";
import {createSlice} from "@reduxjs/toolkit";
import {booksApi} from "../api/booksApi";

let initialState = {
    allBooks: [] as Array<bookType>,
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
            state.allBooks = action.payload.allBooks;
            console.log(state.allBooks, 'action books')
        },
        setDeleteBook: (state, action) => {
            state.allBooks = action.payload;
        },
        setBook: (state, action) => {
            state.book = action.payload;
        },
        setToggleIsFetching: (state, action) => {
            state.isFetching = action.payload;
        },
        setCurrentPage: (state, action) => {
            state.currentPage = action.payload;
        },
        setTotalBooksCount: (state, action) => {
            state.totalBooksCount = action.payload;
        },
        setSearchBooksCount: (state, action) => {
            state.searchBooksCount = action.payload.searchBooksCount;
        },
        setQ: (state, action) => {
            state.q = action.payload;
        },
        setQ_optional: (state, action) => {
            state.q_optional = action.payload;
        },
        setDownload: (state, action) => {
            state.download = action.payload;
        },
        setFilter: (state, action) => {
            state.filter = action.payload;
        },
        setLangRestrict: (state, action) => {
            state.langRestrict = action.payload;
        },
        setLibraryRestrict: (state, action) => {
            state.libraryRestrict = action.payload;
        },
        setStartIndex: (state, action) => {
            state.startIndex = action.payload;
        },
        setMaxResults: (state, action) => {
            state.maxResults = action.payload;
        },
        setPrintType: (state, action) => {
            state.printType = action.payload;
        },
        setProjection: (state, action) => {
            state.projection = action.payload;
        },
        setOrderBy: (state, action) => {
            state.orderBy = action.payload;
        },
        setPartner: (state, action) => {
            state.partner = action.payload;
        },
        setShowPreorders: (state, action) => {
            state.showPreorders = action.payload;
        },
        setSource: (state, action) => {
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
    // console.log(data, 'data in reducer')

    dispatch(setAllBooks({allBooks: data.items}));
    dispatch(setSearchBooksCount({searchBooksCount: data.totalItems}));
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