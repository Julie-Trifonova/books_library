import React from "react";
import s from "./SearchForm.module.css";

type PropsType = {
    onChangeSearchForm: ({}: searchBooksType) => void;
}

export type searchBooksType = {
    currentPage?: number,
    q?: string,
    q_optional?: string,
    download?: string,
    filter?: string,
    langRestrict?: string,
    libraryRestrict?: string,
    startIndex?: number,
    maxResults?: number,
    printType?: string,
    projection?: string,
    orderBy?: string,
    partner?: string,
    showPreorders?: boolean,
    source?: string,
}

const SearchForm:React.FC<PropsType> = ({onChangeSearchForm}) => {

    // currentPage = 1
    return (
        <div>
            <div className={s.title}>
                Search for books
            </div>
            {/*input*/}
            {/*categories*/}
            {/*sorting*/}
        </div>
    )
}

export {SearchForm};