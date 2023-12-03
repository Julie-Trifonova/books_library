import React, {useState} from 'react'
import {useDispatch} from "react-redux";
import {setStartIndex} from "../../../redux/booksReducer";

function usePagination (data: any, itemsPerPage: any, startIndex: number) {

    const [currentPage, setCurrentPage] = useState(1);
    const maxPage = Math.ceil(data.length / itemsPerPage);
    const dispatch = useDispatch()

    function currentData() {
        const begin = (currentPage - 1) * itemsPerPage;
        const end = begin + itemsPerPage;
        return data.slice(begin, end);
    }

    function next() {
        setCurrentPage(currentPage => Math.min(currentPage + 1, maxPage));
        dispatch(setStartIndex(startIndex + 39))
    }

    function prev() {
        setCurrentPage(currentPage => Math.max(currentPage - 1, 1));
    }

    function jump(page: number) {
        const pageNumber = Math.max(1, page);
        setCurrentPage(currentPage => Math.min(pageNumber, maxPage));
    }

    return (
        {next, prev, jump, currentData, currentPage, maxPage}
    )
}

export {usePagination}