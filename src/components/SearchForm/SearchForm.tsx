import React, {useState} from "react";
import s from "./SearchForm.module.css";
import {TextField} from "@mui/material";
import {bookType} from "../../types/types";
import {useDispatch} from "react-redux";
import {getBooksPage, newQType, setNewQ} from "../../redux/booksReducer";
import {reduxForm} from "redux-form";

type PropsType = {
    allBooks: Array<bookType>
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

const SearchForm: React.FC<PropsType> = (
    {
      allBooks
}) => {

    const dispatch = useDispatch();

    const [inputText, setInputText] = useState('')
    const onInputChange = (e: any) => {
        const inputData = e.target.value.toLowerCase()
        setInputText(inputData)
    }

    // const filteredAllBooks = allBooks.filter((b: bookType) => {
    //     if (inputText === '') {
    //         return b;
    //     } else {
    //         return b.volumeInfo.title.toLowerCase().includes(inputText)
    //     }
    // })

    const onSubmit = () => {
        const newQProps = {currentPage: 1, q: inputText, q_optional: ''} as newQType
        dispatch(setNewQ(newQProps))
    }

    return (
        <div>
                <TextField className={s.text_field}
                           onChange={onInputChange}
                           variant="outlined"
                           fullWidth
                           label="Alice"/>
                <button className={s.submit_button}
                        onClick={() => onSubmit()}
                >OK</button>
                <div className={s.title}>
                    Search for books
                </div>
            {/*input*/}
            {/*categories*/}
            {/*sorting*/}
        </div>
    )
}

export {SearchForm}

// let SearchFormReduxForm = reduxForm({
//     form: 'searchForm',
//     // keepDirtyOnReinitialize: true,
//     // enableReinitialize: true,
// })(
// // @ts-ignore
// SearchForm)

// export {SearchFormReduxForm};