import React, {useEffect, useState} from "react";
import s from "./SearchForm.module.css";
import {TextField} from "@mui/material";
import {bookType} from "../../types/types";
import {useDispatch} from "react-redux";
import {getBooksPage, setQ, setQ_optional} from "../../redux/booksReducer";
import {reduxForm} from "redux-form";
import {useNavigate} from "react-router-dom";
import {QOptionalDropdown} from "../QOptionalDropdown";

type PropsType = {
    allBooks: Array<bookType>;
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

const SearchForm: React.FC<PropsType> = ({allBooks}) => {

    const dispatch = useDispatch();
    const navigate = useNavigate()

    const [inputQ, setInputQ] = useState('')
    const [inputQOptional, setInputQOptional] = useState('')

    const onInputChange = (e: any) => {
        const inputData = e.target.value.toLowerCase()
        setInputQ(inputData)
    }

    const onSubmit = () => {
        const newQProps = {
            currentPage: 1,
            q: inputQ,
            q_optional: inputQOptional,
            download: '',
            filter: 'partial',
            langRestrict: '',
            libraryRestrict: 'no-restrict',
            startIndex: 0,
            maxResults: 10,
            printType: 'all',
            projection: 'full',
            orderBy: 'relevance',
            partner: '',
            showPreorders: false,
            source: '',
        } as searchBooksType
        dispatch(setQ({q: newQProps.q}))
        dispatch(setQ_optional({q_optional: newQProps.q_optional}))
        dispatch(getBooksPage(newQProps))
        navigate({
            search: `currentPage=${newQProps.currentPage}&q=${newQProps.q}&+${newQProps.q_optional}&download=${newQProps.download}&filter=${newQProps.filter}&langRestrict=${newQProps.langRestrict}&libraryRestrict=${newQProps.libraryRestrict}&startIndex=${newQProps.startIndex}&maxResults=${newQProps.maxResults}&printType=${newQProps.printType}&projection=${newQProps.projection}&orderBy=${newQProps.orderBy}&partner=${newQProps.partner}&showPreorders=${newQProps.showPreorders}&source=${newQProps.source}&?key=${process.env.REACT_APP_API_KEY}`
        })
    }

    // const filteredAllBooks = allBooks.filter((b: bookType) => {
    //     if (inputQ === '') {
    //         return b;
    //     } else {
    //         return b.volumeInfo.title.toLowerCase().includes(inputQ)
    //     }
    // })

    const handleQOptionalOne = () => {
        console.log('clicked intitle');
        setInputQOptional('intitle')
    }
    const handleQOptionalTwo = () => {
        console.log('clicked inauthor');
        setInputQOptional('inauthor')
    }
    const handleQOptionalThree = () => {
        console.log('clicked inpublisher');
        setInputQOptional('inpublisher')
    }
    const handleQOptionalFour = () => {
        console.log('clicked subject');
        setInputQOptional('subject')
    }
    const handleQOptionalFive = () => {
        console.log('clicked isbn');
        setInputQOptional('isbn')
    }
    const handleQOptionalSix = () => {
        console.log('clicked lccn');
        setInputQOptional('lccn')
    }
    const handleQOptionalSeven = () => {
        console.log('clicked oclc');
        setInputQOptional('oclc')
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

            <QOptionalDropdown
                trigger={<button>+</button>}
                menu={[
                    <button onClick={handleQOptionalOne}>текст находится в заголовке</button>,
                    <button onClick={handleQOptionalTwo}>текст найден у автора</button>,
                    <button onClick={handleQOptionalThree}>текст найден в издателе</button>,
                    <button onClick={handleQOptionalFour}>текст указан в списке категорий тома</button>,
                    <button onClick={handleQOptionalFive}>текст является номером ISBN</button>,
                    <button onClick={handleQOptionalSix}>текст является контрольным номером Библиотеки Конгресса</button>,
                    <button onClick={handleQOptionalSeven}>текст является номером центра компьютерной онлайн-библиотеки</button>,
                ]}
            />

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