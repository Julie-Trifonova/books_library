import React, {useEffect} from "react";
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
} from "../../redux/booksSelectors";
import {useLocation, useNavigate} from "react-router-dom";
import {Preloader} from "../../assets/common/Preloader/Preloader";
import {getBooksPage} from "../../redux/booksReducer";
import {searchBooksType, SearchForm} from "../SearchForm";
import {bookType} from "../../types/types";
import {BookCard} from "../BookCard";
import {nanoid} from 'nanoid'

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

    useEffect(() => {

        const parsed = new URLSearchParams(location.search.substring(1) as any);

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

        if (!!parsed.get("currentPage")) actualCurrentPage = Number(parsed.get("currentPage")) as number
        if (!!parsed.get("q")) actualQ = parsed.get("q") as string
        if (!!parsed.get("q_optional")) actualQ_optional = parsed.get("q_optional")  as string
        if (!!parsed.get("download")) actualDownload = parsed.get("download")  as string
        if (!!parsed.get("filter")) actualFilter = parsed.get("filter")  as string
        if (!!parsed.get("langRestrict")) actualLangRestrict = parsed.get("langRestrict")  as string
        if (!!parsed.get("libraryRestrict")) actualLibraryRestrict = parsed.get("libraryRestrict")  as string
        if (!!parsed.get("startIndex")) actualStartIndex = Number(parsed.get("startIndex")) as number
        if (!!parsed.get("maxResults")) actualMaxResults = Number(parsed.get("maxResults")) as number
        if (!!parsed.get("printType")) actualPrintType = parsed.get("printType")  as string
        if (!!parsed.get("projection")) actualProjection = parsed.get("projection")  as string
        if (!!parsed.get("orderBy")) actualOrderBy = parsed.get("orderBy")  as string
        if (!!parsed.get("partner")) actualPartner = parsed.get("partner")  as string
        if (!!parsed.get("showPreorders")) actualShowPreorders = !!parsed.get("showPreorders") as boolean
        if (!!parsed.get("source")) actualSource = parsed.get("source")  as string

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

        dispatch(getBooksPage(actualPropsPage));
        console.log('useEffect 1')
        // dispatch(getBooks())
    }, [currentPage, q, q_optional, download, filter, langRestrict, libraryRestrict, startIndex, maxResults, printType, projection, orderBy, partner, showPreorders, source])

    // useEffect(() => {
    //     navigate({
    //         search: `
    //             currentPage=${currentPage}
    //             q=${q}
    //             +${q_optional}
    //             &download=${download}
    //             &filter=${filter}
    //             &langRestrict=${langRestrict}
    //             &libraryRestrict=${libraryRestrict}
    //             &startIndex=${startIndex}
    //             &maxResults=${maxResults}
    //             &printType=${printType}
    //             &projection=${projection}
    //             &orderBy=${orderBy}
    //             &partner=${partner}
    //             &showPreorders=${showPreorders}
    //             &source=${source}
    //             &?key=${process.env.REACT_APP_API_KEY}
    //             `
    //     })
    // }, [navigate, currentPage, q, q_optional, download, filter, langRestrict, libraryRestrict, startIndex, maxResults, printType, projection, orderBy, partner, showPreorders, source])

    const onPageChanged = (pageNumber: number) => {
        // dispatch(getDocumentsIncomingCorrespondence());
        // dispatch(
        //     getDocumentsIncomingCorrespondencePage(pageNumber, pageSize, filter)
        // );
    };

    const onChangeSearchForm = (props: searchBooksType) => {
        return dispatch(getBooksPage(props));
    }

    return (
        <div>
            {/*{isFetching ? <Preloader /> :*/}
            <div>
                <SearchForm onChangeSearchForm={onChangeSearchForm}/>
            </div>
            {/*<Paginator/>*/}
            <div>
                bookCard
                {/*{allBooks.map((b: bookType) => <BookCard key={nanoid()} book={b}/>)}*/}
            </div>
            {/*<Paginator/>*/}
            {/*}*/}
        </div>
    )
}

export {BooksLibrary}

