import {bookType} from "../types/types";
import {createSlice} from "@reduxjs/toolkit";
import {booksApi} from "../api/booksApi";
import {searchBooksType} from "../components/SearchForm/SearchForm";

let initialState = {
    allBooks: [] as Array<bookType>,
    book: {} as bookType,
    isFetching: true,
    pageSize: 40,
    hasMore: false,
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
    maxResults: 40,
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
            console.log(state.book, 'action book')
        },
        setToggleIsFetching: (state, action) => {
            state.isFetching = action.payload.isFetching;
            console.log(state.isFetching, 'action isFetching')
        },
        setPageSize: (state, action) => {
            state.pageSize = action.payload.pageSize;
            console.log(state.isFetching, 'action pageSize')
        },
        setHasMore: (state, action) => {
            state.hasMore = action.payload.hasMore;
            console.log(state.hasMore, 'action hasMore')
        },
        setCurrentPage: (state, action) => {
            state.currentPage = action.payload.currentPage;
            console.log(state.currentPage, 'action currentPage')
        },
        setTotalBooksCount: (state, action) => {
            state.totalBooksCount = action.payload.totalBooksCount;
            console.log(state.totalBooksCount, 'action totalBooksCount')
        },
        setSearchBooksCount: (state, action) => {
            state.searchBooksCount = action.payload.searchBooksCount;
            console.log(state.searchBooksCount, 'action searchBooksCount')
        },
        setQ: (state, action) => {
            state.q = action.payload.q;
            console.log(state.q, 'action q')
        },
        setQ_optional: (state, action) => {
            state.q_optional = action.payload.q_optional;
            console.log(state.q_optional, 'action q_optional')
        },
        setDownload: (state, action) => {
            state.download = action.payload.download;
            console.log(state.download, 'action download')
        },
        setFilter: (state, action) => {
            state.filter = action.payload.filter;
            console.log(state.filter, 'action filter')
        },
        setLangRestrict: (state, action) => {
            state.langRestrict = action.payload.langRestrict;
            console.log(state.langRestrict, 'action langRestrict')
        },
        setLibraryRestrict: (state, action) => {
            state.libraryRestrict = action.payload.libraryRestrict;
            console.log(state.libraryRestrict, 'action libraryRestrict')
        },
        setStartIndex: (state, action) => {
            state.startIndex = action.payload.startIndex;
            console.log(state.startIndex, 'action startIndex')
        },
        setMaxResults: (state, action) => {
            state.maxResults = action.payload.maxResults;
            console.log(state.maxResults, 'action maxResults')
        },
        setPrintType: (state, action) => {
            state.printType = action.payload.printType;
            console.log(state.printType, 'action printType')
        },
        setProjection: (state, action) => {
            state.projection = action.payload.projection;
            console.log(state.projection, 'action projection')
        },
        setOrderBy: (state, action) => {
            state.orderBy = action.payload.orderBy;
            console.log(state.orderBy, 'action orderBy')
        },
        setPartner: (state, action) => {
            state.partner = action.payload.partner;
            console.log(state.partner, 'action partner')
        },
        setShowPreorders: (state, action) => {
            state.showPreorders = action.payload.showPreorders;
            console.log(state.showPreorders, 'action showPreorders')
        },
        setSource: (state, action) => {
            state.source = action.payload.source
            console.log(state.source, 'action source')
        },
    }
})

export const {
    setAllBooks,
    setDeleteBook,
    setBook,
    setToggleIsFetching,
    setPageSize,
    setHasMore,
    setCurrentPage,
    setTotalBooksCount,
    setSearchBooksCount,
    setQ,
    setQ_optional,
    setDownload,
    setFilter,
    setLangRestrict,
    setLibraryRestrict,
    setStartIndex,
    setMaxResults,
    setPrintType,
    setProjection,
    setOrderBy,
    setPartner,
    setShowPreorders,
    setSource
}
    = booksReducer.actions
export default booksReducer.reducer

export const getBooksPage = ({
                                 allBooks,
                                 currentPage,
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
                                 source
                             }: searchBooksType)
    : any => async (dispatch: any) => {
    dispatch(setToggleIsFetching({isFetching: true}));

    // if (data.items && typeof data.items !== 'undefined')

    let arr = [] as Array<bookType>
    console.log('allBooks, startIndex', allBooks, startIndex)
    await booksApi.getAllBooksPage({
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
        source
    } as searchBooksType).then((res) => {
        if (allBooks && allBooks.length === startIndex) {
            allBooks.map((b: bookType) => arr.push(b))
            if (startIndex === 0) {
                dispatch(setSearchBooksCount({searchBooksCount: Number(res.totalItems)}));
                dispatch(setAllBooks({allBooks: res.items}));
                dispatch(setStartIndex({startIndex: (startIndex + 40)}))
            } else if (startIndex !== 0) {
                res.items.map((b: bookType) => arr.push(b))
                dispatch(setAllBooks({allBooks: arr}));
            }
            if (res.items.length >= 40) {
                dispatch(setHasMore({hasMore: true}))
            } else if (res.items.length < 40) {
                dispatch(setHasMore({hasMore: false}))
            }
        }
    })

    dispatch(setToggleIsFetching({isFetching: false}));
};

// export const updateIncomingDocument =
//     (documentId: number): any => async (dispatch: any, getState: any) => {
//     const formData = getState().form.searchForm.values;
//     // await booksApi.updatePage(formData);
// };

export const getCurrentBook = (documentId: string): any => async (dispatch: any) => {
    dispatch(setToggleIsFetching({isFetching: true}));
    const book = await booksApi.getBook(documentId)
    dispatch(setBook({book: book}))
    dispatch(setToggleIsFetching({isFetching: false}));
}