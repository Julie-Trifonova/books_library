import React from "react";
import {bookType} from "../../types/types";
import s from './BookCard.module.css'
import '../../styles/fonts/AvantGarde/ofont.ru_AvantGarde.ttf'
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getCurrentBook} from "../../redux/booksReducer";

type PropsType = {
    book: bookType
}

const BookCard: React.FC<PropsType> = ({book}) => {
    const dispatch = useDispatch()
    const onChange = () => {
        console.log('click')
        dispatch(getCurrentBook((String(book.id))))
    }
    return (
        <div className={s.book_card}>
            {book ?
                <div>
                    <NavLink to={`${book.id}`} reloadDocument className='' onClick={onChange}>
                        <div className={s.book_img_container}>
                            <img className={s.book_img} src={book.volumeInfo.imageLinks?.smallThumbnail} alt={''}/>
                        </div>
                        <div className={s.text}>
                            <div className={s.text_category}>{book.volumeInfo?.categories}</div>
                            <div className={s.text_title}>{book.volumeInfo?.title}</div>
                            <div className={s.text_authors}>{book.volumeInfo?.authors}</div>
                        </div>
                    </NavLink>
                </div> : ''}
        </div>
    )
}

export {BookCard}


{/*<div>*/
}
{/*    <div>Link</div>*/
}
{/*    <div>{book.selfLink}</div>*/
}
{/*</div>*/
}

{/*<div>*/
}
{/*    <div>Publisher</div>*/
}
{/*    <div>{book.volumeInfo.publisher}</div>*/
}
{/*</div>*/
}
{/*<div>*/
}
{/*    <div>Publish Date</div>*/
}
{/*    <div>{book.volumeInfo.publishedDate}</div>*/
}
{/*</div>*/
}
{/*<div>*/
}
{/*    <div>Description</div>*/
}
{/*    <div>{book.volumeInfo.description}</div>*/
}
{/*</div>*/
}

{/*not working api :*/
}
{/*<div>*/
}
{/*    {!!book.volumeInfo.readingModes.text ?*/
}
{/*        <div>Read in Text available</div>*/
}
{/*        : 'Reading in Text is not available'*/
}
{/*    }*/
}
{/*</div>*/
}
{/*<div>*/
}
{/*    {!!book.volumeInfo.readingModes.image ?*/
}
{/*        <div>Read in Images available</div>*/
}
{/*        : 'Reading in Images is not available'*/
}
{/*    }*/
}
{/*</div>*/
}
{/*end of not working api*/
}

{/*<div>*/
}
{/*    <div>Pages count</div>*/
}
{/*    <div>{book.volumeInfo.pageCount}</div>*/
}
{/*</div>*/
}
{/*<div>*/
}
{/*    <div>Print Type</div>*/
}
{/*    <div>{book.volumeInfo.printType}</div>*/
}
{/*</div>*/
}
{/*<div>*/
}
{/*    <div>Language</div>*/
}
{/*    <div>{book.volumeInfo.language}</div>*/
}
{/*</div>*/
}
{/*<div>*/
}
{/*    <div>Preview Link</div>*/
}
{/*    <div>{book.volumeInfo.previewLink}</div>*/
}
{/*</div>*/
}
{/*<div>*/
}
{/*    <div>Info Link</div>*/
}
{/*    <div>{book.volumeInfo.infoLink}</div>*/
}
{/*</div>*/
}
{/*<div>*/
}
{/*    <div>Canonical Volume Link</div>*/
}
{/*    <div>{book.volumeInfo.canonicalVolumeLink}</div>*/
}
{/*</div>*/
}
{/*<div>*/
}
{/*    <div>Sale Info Country</div>*/
}
{/*    <div>{book.saleInfo.country}</div>*/
}
{/*</div>*/
}
{/*<div>*/
}
{/*    <div>Sale Info Saleability</div>*/
}
{/*    <div>{book.saleInfo.saleability}</div>*/
}
{/*</div>*/
}
{/*<div>*/
}
{/*    <div>Sale Info isEbook</div>*/
}
{/*    <div>{book.saleInfo.isEbook}</div>*/
}
{/*</div>*/
}
{/*<div>*/
}
{/*    <div>Sale Info listPrice amount</div>*/
}
{/*    /!*<div>{book.saleInfo.listPrice.amount}</div>*!/*/
}
{/*</div>*/
}
{/*<div>*/
}
{/*    <div>Sale Info listPrice currency</div>*/
}
{/*    /!*<div>{book.saleInfo.listPrice.currencyCode}</div>*!/*/
}
{/*</div>*/
}
{/*<div>*/
}
{/*    <div>Sale Info buyLink</div>*/
}
{/*    <div>{book.saleInfo.buyLink}</div>*/
}
{/*</div>*/
}
{/*<div>*/
}
{/*    <div>Access Info country</div>*/
}
{/*    <div>{book.accessInfo.country}</div>*/
}
{/*</div>*/
}
{/*<div>*/
}
{/*    <div>Access Info viewability</div>*/
}
{/*    <div>{book.accessInfo.viewability}</div>*/
}
{/*</div>*/
}
{/*<div>*/
}
{/*    <div>Access Info epub isAvailable</div>*/
}
{/*    <div>{book.accessInfo.epub.isAvailable}</div>*/
}
{/*</div>*/
}
{/*<div>*/
}
{/*    <div>Access Info epub acsTokenLink</div>*/
}
{/*    <div>{book.accessInfo.epub.acsTokenLink}</div>*/
}
{/*</div>*/
}
{/*<div>*/
}
{/*    <div>Access Info pdf isAvailable</div>*/
}
{/*    <div>{book.accessInfo.pdf.isAvailable}</div>*/
}
{/*</div>*/
}
{/*<div>*/
}
{/*    <div>Access Info webReaderLink</div>*/
}
{/*    <div>{book.accessInfo.webReaderLink}</div>*/
}
{/*</div>*/
}