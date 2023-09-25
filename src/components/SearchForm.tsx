import React from "react";

type PropsType = {
    onChangeSearchForm: ({}: searchBooksType) => void;
}

type searchBooksType = {
    currentPage: number,
    q: string,
    q_optional: string,
    download: string,
    filter: string,
    langRestrict: string,
    libraryRestrict: string,
    startIndex: number,
    maxResults: number,
    printType: string,
    projection: string,
    orderBy: string,
    partner: string,
    showPreorders: boolean,
    source: string,
}


const SearchForm:React.FC<PropsType> = ({onChangeSearchForm}) => {

    return (
        <>
        </>
    )
}

export {SearchForm};