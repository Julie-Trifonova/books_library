import React, {useEffect, useState} from "react";
import s from "./SearchForm.module.css";
import {Checkbox, TextField} from "@mui/material";
import {bookType} from "../../types/types";
import {useDispatch} from "react-redux";
import {
    getBooksPage,
    setAllBooks,
    setDownload,
    setFilter,
    setQ,
    setQ_optional,
    setStartIndex
} from "../../redux/booksReducer";
import {reduxForm} from "redux-form";
import {useLocation, useNavigate} from "react-router-dom";
import {DropdownList} from "../DropdownList";
import {pink, red, yellow} from "@mui/material/colors";

type PropsType = {
    allBooks: Array<bookType>;
}

export type searchBooksType = {
    allBooks: Array<bookType>,
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

const SearchForm: React.FC<PropsType> = ({allBooks}) => {

    const dispatch = useDispatch();
    const navigate = useNavigate()
    let location = useLocation();

    // if (!!location.state) {
    //   const { newDocument } = location.state;
    //   document = newDocument;
    // }

    // const [
    //     _root,
    //     _correspondence_system,
    //     _incomingCorrespondence,
    //     documentIdString,
    // ]: Array<string> = location.pathname.split("/");
    // let documentId = String(documentIdString);

    const getInitialState = () => {
        return localStorage.getItem("SelectedOption") || "0";
        // return "0";
    };
    let [editMode, setEditMode] = useState(getInitialState());
    const setSelectedOption = (option: string) => {
        localStorage.setItem("SelectedOption", option);
        setEditMode(option);
    };
    // const handleSubmit = () => {
    //     if (!!location.state) {
    //         dispatch(addIncomingDocument(documentId, document)).then(() => {
    //             setSelectedOption("0");
    //         });
    //     } else {
    //         dispatch(updateIncomingDocument(documentId)).then(() => {
    //             setSelectedOption("0");
    //         });
    //     }
    // };

    const [inputQ, setInputQ] = useState('')
    const [inputQOptional, setInputQOptional] = useState('')
    const [inputFilter, setInputFilter] = useState('')
    const [checkDownload, setCheckDownload] = useState('')

    const onInputChange = (e: any) => {
        const inputData = e.target.value.toLowerCase()
        setInputQ(inputData)
    }
    const newQProps = {
        allBooks: [],
        currentPage: 1,
        q: inputQ,
        q_optional: inputQOptional,
        // download: '',
        download: checkDownload,
        filter: inputFilter,
        langRestrict: '',
        libraryRestrict: 'no-restrict',
        startIndex: 0,
        maxResults: 40,
        printType: 'all',
        projection: 'full',
        orderBy: 'relevance',
        partner: '',
        showPreorders: false,
        source: '',
    } as searchBooksType

    useEffect(() => {
        if (!!location.state || (!!inputQ || !!inputQOptional || !!inputFilter || !!checkDownload) ) {
            // navigate(0);
            // navigate({
            //     search: `currentPage=${newQProps.currentPage}&q=${newQProps.q}&+${newQProps.q_optional}&download=${newQProps.download}&filter=${newQProps.filter}&langRestrict=${newQProps.langRestrict}&libraryRestrict=${newQProps.libraryRestrict}&startIndex=${newQProps.startIndex}&maxResults=${newQProps.maxResults}&printType=${newQProps.printType}&projection=${newQProps.projection}&orderBy=${newQProps.orderBy}&partner=${newQProps.partner}&showPreorders=${newQProps.showPreorders}&source=${newQProps.source}&?key=${process.env.REACT_APP_API_KEY}`
            // }, {
            //     replace: true,
            // })
            dispatch(getBooksPage(newQProps))
            console.log(newQProps.q, 'newQProps.q')
        }
    }, [
        dispatch,
        location.state,
        navigate,
        // newQProps
    ]);

    const onSubmit = () => {
        dispatch(setQ({q: newQProps.q}))
        dispatch(setAllBooks({allBooks: newQProps.allBooks}))
        dispatch(setQ_optional({q_optional: newQProps.q_optional}))
        dispatch(setDownload({download: newQProps.download}))
        dispatch(setFilter({filter: newQProps.filter}))
        dispatch(setStartIndex({startIndex: newQProps.startIndex}))
        dispatch(getBooksPage(newQProps))

        // dispatch(getBooksPage(newQProps))
        // navigate({
        //     search: `currentPage=${newQProps.currentPage}&q=${newQProps.q}&+${newQProps.q_optional}&download=${newQProps.download}&filter=${newQProps.filter}&langRestrict=${newQProps.langRestrict}&libraryRestrict=${newQProps.libraryRestrict}&startIndex=${newQProps.startIndex}&maxResults=${newQProps.maxResults}&printType=${newQProps.printType}&projection=${newQProps.projection}&orderBy=${newQProps.orderBy}&partner=${newQProps.partner}&showPreorders=${newQProps.showPreorders}&source=${newQProps.source}&?key=${process.env.REACT_APP_API_KEY}`
        // }, {
        //     replace: true,
        // })
    }

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

    const handleDownloadOne = () => {
        console.log('clicked download default', checkDownload);
        setCheckDownload('')
    }
    const handleDownloadTwo = () => {
        console.log('clicked download epub', checkDownload);
        setCheckDownload('epub')
    }
    const handleDownloadThree = () => {
        console.log('clicked download pdf', checkDownload);
        setCheckDownload('pdf')
    }

    const handleFilterOne = () => {
        console.log('clicked partial');
        setInputFilter('partial')
    }
    const handleFilterTwo = () => {
        console.log('clicked full');
        setInputFilter('full')
    }
    const handleFilterThree = () => {
        console.log('clicked free-ebooks');
        setInputFilter('free-ebooks')
    }
    const handleFilterFour = () => {
        console.log('clicked paid-ebooks');
        setInputFilter('paid-ebooks')
    }
    const handleFilterFive = () => {
        console.log('clicked isbn');
        setInputFilter('ebooks')
    }

    return (
        <div>
                <TextField className={s.text_field}
                           onChange={onInputChange}
                           variant="outlined"
                           fullWidth
                           label="Alice"
                           value={inputQ}
                />
                <button className={s.submit_button}
                        onClick={() => onSubmit()}
                >OK</button>

            <DropdownList
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

            <div>
                <div>Set download type</div>
                <div>
                    <span>Не важно</span>
                    <Checkbox
                        // defaultChecked
                        checked={checkDownload === '' ? true : false}
                        onChange={handleDownloadOne}
                        sx={{
                            color: yellow[800],
                            '&.Mui-checked': {
                                color: yellow[600],
                            },
                        }}
                    />
                </div>

                <div>
                    <span>epub</span>
                    <Checkbox
                        // defaultChecked
                        checked={checkDownload === 'epub' ? true : false}
                        onChange={handleDownloadTwo}
                        sx={{
                            color: pink[800],
                            '&.Mui-checked': {
                                color: pink[600],
                            },
                        }}
                    />
                </div>

                <div>
                    <span>pdf</span>
                    <Checkbox
                        // defaultChecked
                        checked={checkDownload === 'pdf' ? true : false}
                        onChange={handleDownloadThree}
                        sx={{
                            color: red[800],
                            '&.Mui-checked': {
                                color: red[600],
                            },
                        }}
                    />
                </div>

            </div>


            <DropdownList
                trigger={<button>filter</button>}
                menu={[
                    <button onClick={handleFilterOne}>хотя бы часть текста доступна для предварительного просмотра</button>,
                    <button onClick={handleFilterTwo}>виден весь текст</button>,
                    <button onClick={handleFilterThree}>бесплатные электронные книги Google</button>,
                    <button onClick={handleFilterFour}>являются электронными книгами Google с указанием цены</button>,
                    <button onClick={handleFilterFive}>являются электронными книгами Google, платными или бесплатными</button>,
                ]}
            />

                <div className={s.title}>
                    Search for books
                </div>
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
