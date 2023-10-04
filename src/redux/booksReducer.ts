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
            state.allBooks = action.payload.deleteBook;
        },
        setBook: (state, action) => {
            state.book = action.payload.book;
        },
        setToggleIsFetching: (state, action) => {
            state.isFetching = action.payload.isFetching;
        },
        setCurrentPage: (state, action) => {
            state.currentPage = action.payload.currentPage;
        },
        setTotalBooksCount: (state, action) => {
            state.totalBooksCount = action.payload.totalBooksCount;
        },
        setSearchBooksCount: (state, action) => {
            state.searchBooksCount = action.payload.searchBooksCount;
        },
        setQ: (state, action) => {
            state.q = action.payload.q;
        },
        setQ_optional: (state, action) => {
            state.q_optional = action.payload.q_optional;
        },
        setDownload: (state, action) => {
            state.download = action.payload.download;
        },
        setFilter: (state, action) => {
            state.filter = action.payload.filter;
        },
        setLangRestrict: (state, action) => {
            state.langRestrict = action.payload.langRestrict;
        },
        setLibraryRestrict: (state, action) => {
            state.libraryRestrict = action.payload.libraryRestrict;
        },
        setStartIndex: (state, action) => {
            state.startIndex = action.payload.startIndex;
        },
        setMaxResults: (state, action) => {
            state.maxResults = action.payload.maxResults;
        },
        setPrintType: (state, action) => {
            state.printType = action.payload.printType;
        },
        setProjection: (state, action) => {
            state.projection = action.payload.projection;
        },
        setOrderBy: (state, action) => {
            state.orderBy = action.payload.orderBy;
        },
        setPartner: (state, action) => {
            state.partner = action.payload.partner;
        },
        setShowPreorders: (state, action) => {
            state.showPreorders = action.payload.showPreorders;
        },
        setSource: (state, action) => {
            state.source = action.payload.source
        },
    }
})

export const { setAllBooks, setDeleteBook, setBook, setToggleIsFetching, setCurrentPage, setTotalBooksCount, setSearchBooksCount, setQ, setQ_optional, setDownload, setFilter, setLangRestrict, setLibraryRestrict, setStartIndex, setMaxResults, setPrintType, setProjection, setOrderBy, setPartner, setShowPreorders, setSource }
    = booksReducer.actions
export default booksReducer.reducer

export const getBooksPage = ({currentPage = 1, q = 'alice', q_optional = '', download = '', filter = 'partial', langRestrict = '', libraryRestrict = 'no-restrict', startIndex = 0, maxResults = 10, printType = 'all', projection = 'full', orderBy = 'relevance', partner = '', showPreorders = false, source = ''})
    : any => async (dispatch: any) => {
    dispatch(setToggleIsFetching({isFetching: true}));

    const data = await booksApi.getAllBooksPage({q, q_optional, download, filter, langRestrict, libraryRestrict, startIndex, maxResults, printType, projection, orderBy, partner, showPreorders, source});
    // console.log(data, 'data in reducer')

    dispatch(setAllBooks({allBooks: data.items}));
    dispatch(setSearchBooksCount({searchBooksCount: Number(data.totalItems)}));
    dispatch(setCurrentPage({currentPage: currentPage}));
    dispatch(setQ({q: q}));
    dispatch(setQ_optional({q_optional: q_optional}));
    dispatch(setDownload({download: download}));
    dispatch(setFilter({filter: filter}));
    dispatch(setLangRestrict({langRestrict: langRestrict}));
    dispatch(setLibraryRestrict({libraryRestrict: libraryRestrict}));
    dispatch(setStartIndex({startIndex: startIndex}));
    dispatch(setMaxResults({maxResults: maxResults}));
    dispatch(setPrintType({printType: printType}));
    dispatch(setProjection({projection: projection}));
    dispatch(setOrderBy({orderBy: orderBy}));
    dispatch(setPartner({partner: partner}));
    dispatch(setShowPreorders({showPreorders: showPreorders}));
    dispatch(setSource({source: source}));

    // setBook, setDeleteBook, setTotalBooksCount
    dispatch(setToggleIsFetching(false));
};