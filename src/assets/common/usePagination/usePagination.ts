import React, {useState} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {getBooksPage, setStartIndex} from "../../../redux/booksReducer";
import {getStartIndex} from "../../../redux/booksSelectors";
import {searchBooksType} from "../../../components/SearchForm/SearchForm";

function usePagination (data: any, itemsPerPage: any, searchBooksCount: any) {

    const [currentPage, setCurrentPage] = useState(1);
    const maxPage = Math.ceil(searchBooksCount / itemsPerPage);
    // const maxPage = Math.ceil(data.length / itemsPerPage);

    function currentData() {
        const begin = (currentPage - 1) * itemsPerPage;
        const end = begin + itemsPerPage;
        return data.slice(begin, end);
    }

    function next() {
        setCurrentPage(Math.min(currentPage + 1, maxPage));
        // f()
    }

    function prev() {
        setCurrentPage(Math.max(currentPage - 1, 1));
    }

    function jump(page: number) {
        const pageNumber = Math.max(1, page);
        setCurrentPage(Math.min(pageNumber, maxPage));
    }

    return (
        {next, prev, jump, currentData, currentPage, maxPage}
    )
}

export {usePagination}