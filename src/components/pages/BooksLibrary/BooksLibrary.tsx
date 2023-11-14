import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {
    gerQ_optional,
    getAllBooks,
    getBook,
    getCurrentPage,
    getDownload,
    getFilter,
    getIsFetching,
    getLangRestrict,
    getLibraryRestrict, getOrderBy,
    getMaxResults,
    getPartner,
    getPrintType,
    getProjection,
    getQ, getShowPreorders, getSource,
    getStartIndex,
    getTotalBooksCount, getSearchBooksCount
} from "../../../redux/booksSelectors";
import {useLocation, useNavigate} from "react-router-dom";
import {Preloader} from "../../../assets/common/Preloader/Preloader";
import {getBooksPage} from "../../../redux/booksReducer";
import {searchBooksType, SearchForm} from "../../SearchForm/SearchForm";
import {bookType} from "../../../types/types";
import {BookCard} from "../../BooksCard/BookCard";
import {nanoid} from 'nanoid'
import s from './BooksLibrary.module.css'

const BooksLibrary = () => {
    const allBooks = useSelector(getAllBooks)
    const book = useSelector(getBook)
    const isFetching = useSelector(getIsFetching)
    const totalBooksCount = useSelector(getTotalBooksCount)
    const searchBooksCount = useSelector(getSearchBooksCount)

    const currentPage = useSelector(getCurrentPage)
    const q = useSelector(getQ)
    const q_optional = useSelector(gerQ_optional)
    const download = useSelector(getDownload)
    const filter = useSelector(getFilter)
    const langRestrict = useSelector(getLangRestrict)
    const libraryRestrict = useSelector(getLibraryRestrict)
    const startIndex = useSelector(getStartIndex)
    const maxResults = useSelector(getMaxResults)
    const printType = useSelector(getPrintType)
    const projection = useSelector(getProjection)
    const orderBy = useSelector(getOrderBy)
    const partner = useSelector(getPartner)
    const showPreorders = useSelector(getShowPreorders)
    const source = useSelector(getSource)

    const dispatch = useDispatch()
    const navigate = useNavigate()
    let location = useLocation()

    const parsed = new URLSearchParams(location.search.substring(1) as any);

    // let actualCurrentPage = Number(parsed.get("currentPage")) as number
    // let actualQ = parsed.get("q") as string
    // let actualQ_optional = parsed.get("q_optional") as string
    // let actualDownload = parsed.get("download") as string
    // let actualFilter = parsed.get("filter") as string
    // let actualLangRestrict = parsed.get("langRestrict") as string
    // let actualLibraryRestrict = parsed.get("libraryRestrict") as string
    // let actualStartIndex = Number(parsed.get("startIndex")) as number
    // let actualMaxResults = Number(parsed.get("maxResults")) as number
    // let actualPrintType = parsed.get("printType") as string
    // let actualProjection = parsed.get("projection") as string
    // let actualOrderBy = parsed.get("orderBy") as string
    // let actualPartner = parsed.get("partner") as string
    // let actualShowPreorders = !!parsed.get("showPreorders") as boolean
    // let actualSource = parsed.get("source") as string

    let actualCurrentPage = Number(parsed.get("currentPage")) as number
    let actualQ = parsed.get("q") as string
    let actualQ_optional = parsed.get("q_optional") as string
    let actualDownload = parsed.get("download") as string
    let actualFilter = parsed.get("filter") as string
    let actualLangRestrict = parsed.get("langRestrict") as string
    let actualLibraryRestrict = parsed.get("libraryRestrict") as string
    let actualStartIndex = Number(parsed.get("startIndex")) as number
    let actualMaxResults = Number(parsed.get("maxResults")) as number
    let actualPrintType = parsed.get("printType") as string
    let actualProjection = parsed.get("projection") as string
    let actualOrderBy = parsed.get("orderBy") as string
    let actualPartner = parsed.get("partner") as string
    let actualShowPreorders = !!parsed.get("showPreorders") as boolean
    let actualSource = parsed.get("source") as string

    let actualPropsPage = {
        actualCurrentPage,
        actualQ,
        actualQ_optional,
        actualDownload,
        actualFilter,
        actualLangRestrict,
        actualLibraryRestrict,
        actualStartIndex,
        actualMaxResults,
        actualPrintType,
        actualProjection,
        actualOrderBy,
        actualPartner,
        actualShowPreorders,
        actualSource,
    } as unknown as searchBooksType

    let propsPage = {
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
    }

    useEffect(() => {
        if (!actualQ || actualQ === q) {
            dispatch(getBooksPage(propsPage));
            console.log('effect 1')
            navigate({
                search: `currentPage=${currentPage}&q=${q}&+${q_optional}&download=${download}&filter=${filter}&langRestrict=${langRestrict}&libraryRestrict=${libraryRestrict}&startIndex=${startIndex}&maxResults=${maxResults}&printType=${printType}&projection=${projection}&orderBy=${orderBy}&partner=${partner}&showPreorders=${showPreorders}&source=${source}&?key=${process.env.REACT_APP_API_KEY}`
            })
        }
    }, [
        useEffect,
        // propsPage
        // currentPage,
        // q,
        // q_optional,
        // download,
        // filter,
        // langRestrict,
        // libraryRestrict,
        // startIndex,
        // maxResults,
        // printType,
        // projection,
        // orderBy,
        // partner,
        // showPreorders,
        // source
    ])

    useEffect(() => {
        if (actualQ && actualQ !== q) {
            navigate({
                search: `currentPage=${actualCurrentPage}&q=${actualQ}&+${actualQ_optional}&download=${actualDownload}&filter=${actualFilter}&langRestrict=${actualLangRestrict}&libraryRestrict=${actualLibraryRestrict}&startIndex=${actualStartIndex}&maxResults=${actualMaxResults}&printType=${actualPrintType}&projection=${actualProjection}&orderBy=${orderBy}&partner=${actualPartner}&showPreorders=${actualShowPreorders}&source=${actualSource}&?key=${process.env.REACT_APP_API_KEY}`
            })
            dispatch(getBooksPage(actualPropsPage));
            console.log('effect 2', actualQ, q, actualPropsPage)
        }
    }, [
        useEffect,
        // allBooks,
        // q,
        actualCurrentPage,
        actualQ,
        actualQ_optional,
        actualDownload,
        actualFilter,
        actualLangRestrict,
        actualLibraryRestrict,
        actualStartIndex,
        actualMaxResults,
        actualPrintType,
        actualProjection,
        actualOrderBy,
        actualPartner,
        actualShowPreorders,
        actualSource
    ])

    useEffect(() => {
        // navigate({
        //     search: `currentPage=${currentPage}&q=${q}&+${q_optional}&download=${download}&filter=${filter}&langRestrict=${langRestrict}&libraryRestrict=${libraryRestrict}&startIndex=${startIndex}&maxResults=${maxResults}&printType=${printType}&projection=${projection}&orderBy=${orderBy}&partner=${partner}&showPreorders=${showPreorders}&source=${source}&?key=${process.env.REACT_APP_API_KEY}`
        // })

        // dispatch(getBooksPage(propsPage));
    }, [
        navigate,
        // currentPage,
        // q,
        // q_optional,
        // download,
        // filter,
        // langRestrict,
        // libraryRestrict,
        // startIndex,
        // maxResults,
        // printType,
        // projection,
        // orderBy,
        // partner,
        // showPreorders,
        // source
    ])

    return (
        <div>
            {isFetching
                ? <Preloader/>
                : <div className={s.booksLibrary}>
                    {/*<Paginator/>*/}
                    <div>
                        {/*<SearchFormReduxForm */}
                        {/*    onSubmit={onSubmitSearchForm}*/}
                        {/*    // initialValues={}*/}
                        {/*/>*/}
                        <SearchForm
                            allBooks={allBooks}
                        />
                    </div>
                    <div className={s.results}>
                        {/*{`Found ${searchBooksCount} results`}*/}
                        {
                            allBooks
                            && (allBooks.length > 0)
                            && ((actualDownload === 'epub' || download === 'epub')
                                ? `Found ${allBooks.filter((b: bookType) => !!b.accessInfo.epub.isAvailable).length} results`
                                : (actualDownload === 'pdf' || download === 'pdf')
                                ? `Found ${allBooks.filter((b: bookType) => !!b.accessInfo.pdf.isAvailable).length} results`
                                : `Found ${allBooks.length} results`)
                        }
                    </div>
                    <div className={s.books}>
                        {
                            allBooks
                            && (allBooks.length > 0)
                            && ((actualDownload === 'epub' || download === 'epub')
                                ? allBooks.filter((b: bookType) => !!b.accessInfo.epub.isAvailable)
                                    .map((b: bookType) => <BookCard key={b.id} book={b}/>)
                            : (actualDownload === 'pdf' || download === 'pdf') ? allBooks.filter((b: bookType) => !!b.accessInfo.pdf.isAvailable)
                                        .map((b: bookType) => <BookCard key={b.id} book={b}/>)
                            : allBooks.map((b: bookType) => <BookCard key={b.id} book={b}/>))
                            // && allBooks.map((b: bookType) =>
                            // <BookCard key={b.id} book={b}/>)
                        }
                    </div>
                </div>
            }
        </div>
    )
}

export {BooksLibrary}

