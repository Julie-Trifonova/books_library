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
import {getBooksPage, newQType, setNewQ} from "../../../redux/booksReducer";
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

    // const [allBooks, setAllBooks] = useState(useSelector(getAllBooks));

    let actualCurrentPage = currentPage
    let actualQ = q
    let actualQ_optional = q_optional
    let actualDownload = download
    let actualFilter = filter
    let actualLangRestrict = langRestrict
    let actualLibraryRestrict = libraryRestrict
    let actualStartIndex = startIndex
    let actualMaxResults = maxResults
    let actualPrintType = printType
    let actualProjection = projection
    let actualOrderBy = orderBy
    let actualPartner = partner
    let actualShowPreorders = showPreorders
    let actualSource = source

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
    } as searchBooksType

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
        dispatch(getBooksPage(propsPage));
    }, [useEffect, currentPage, q, q_optional, download, filter, langRestrict, libraryRestrict, startIndex, maxResults, printType, projection, orderBy, partner, showPreorders, source])

    useEffect(() => {

        const parsed = new URLSearchParams(location.search.substring(1) as any);

        !!parsed.get("currentPage") && (actualCurrentPage = Number(parsed.get("currentPage")) as number)
        !!parsed.get("q") && (actualQ = parsed.get("q") as string)
        !!parsed.get("q_optional") && (actualQ_optional = parsed.get("q_optional") as string)
        !!parsed.get("download") && (actualDownload = parsed.get("download") as string)
        !!parsed.get("filter") && (actualFilter = parsed.get("filter") as string)
        !!parsed.get("langRestrict") && (actualLangRestrict = parsed.get("langRestrict") as string)
        !!parsed.get("libraryRestrict") && (actualLibraryRestrict = parsed.get("libraryRestrict") as string)
        !!parsed.get("startIndex") && (actualStartIndex = Number(parsed.get("startIndex")) as number)
        !!parsed.get("maxResults") && (actualMaxResults = Number(parsed.get("maxResults")) as number)
        !!parsed.get("printType") && (actualPrintType = parsed.get("printType") as string)
        !!parsed.get("projection") && (actualProjection = parsed.get("projection") as string)
        !!parsed.get("orderBy") && (actualOrderBy = parsed.get("orderBy") as string)
        !!parsed.get("partner") && (actualPartner = parsed.get("partner") as string)
        !!parsed.get("showPreorders") && (actualShowPreorders = !!parsed.get("showPreorders") as boolean)
        !!parsed.get("source") && (actualSource = parsed.get("source") as string)

        dispatch(getBooksPage(actualPropsPage));
    }, [useEffect, actualCurrentPage,
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
        actualSource])

    useEffect(() => {
        navigate({
            search: `
                currentPage=${currentPage}
                q=${q}
                +${q_optional}
                &download=${download}
                &filter=${filter}
                &langRestrict=${langRestrict}
                &libraryRestrict=${libraryRestrict}
                &startIndex=${startIndex}
                &maxResults=${maxResults}
                &printType=${printType}
                &projection=${projection}
                &orderBy=${orderBy}
                &partner=${partner}
                &showPreorders=${showPreorders}
                &source=${source}
                &?key=${process.env.REACT_APP_API_KEY}
                `
        })
        // dispatch(getBooksPage(propsPage));
    }, [navigate, currentPage, q, q_optional, download, filter, langRestrict, libraryRestrict, startIndex, maxResults, printType, projection, orderBy, partner, showPreorders, source])

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
                        {`Found ${searchBooksCount} results`}
                    </div>
                    <div className={s.books}>
                        {
                            (allBooks.length > 0) && allBooks.map((b: bookType) =>
                            <BookCard key={b.id} book={b}/>)
                        }
                    </div>
                </div>
            }
        </div>
    )
}

export {BooksLibrary}

