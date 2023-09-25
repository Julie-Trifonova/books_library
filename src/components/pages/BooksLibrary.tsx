import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {
    getAllBooks,
    getBook,
    getCurrentPage,
    getFilter,
    getIsFetching, getPageSize,
    getTotalBooksCount
} from "../../redux/booksSelectors";
import {useLocation, useNavigate} from "react-router-dom";
import {Preloader} from "../../assets/common/Preloader/Preloader";
import {FilterType, getBooksPage} from "../../redux/booksReducer";
import {SearchForm} from "../SearchForm";

const BooksLibrary = () => {
    const allBooks = useSelector(getAllBooks)
    const book = useSelector(getBook)
    const isFetching = useSelector(getIsFetching)
    const currentPage = useSelector(getCurrentPage)
    const filter = useSelector(getFilter)
    const totalBooksCount = useSelector(getTotalBooksCount)
    const pageSize = useSelector(getPageSize)

    const dispatch = useDispatch()
    const navigate = useNavigate()
    let location = useLocation()

    const onChangeSearchForm = (
        currentPage: number = 1,
        q: string = '',
        q_optional: string = '',
        download: string = '',
        filter: string = 'partial',
        langRestrict: string = '',
        libraryRestrict: string = 'no-restrict',
        startIndex: number = 0,
        maxResults: number = 10,
        printType: string = 'all',
        projection: string = 'full',
        orderBy: string = 'relevance',
        partner: string = '',
        showPreorders: boolean = false,
        source: string = '',
    ) => {
        dispatch(getBooksPage(
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
            source,
        ))
    }

    return (
        <div>
            {isFetching ? <Preloader /> :
                <div>
                    <SearchForm onChangeSearchForm={onChangeSearchForm}/>

                </div>
            }

        </div>
    )
}

export {BooksLibrary}