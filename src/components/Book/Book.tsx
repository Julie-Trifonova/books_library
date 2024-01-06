import React from 'react'
import {useSelector} from "react-redux";
import {getBook} from "../../redux/booksSelectors";

const Book = () => {
    const book = useSelector(getBook)

    return (
        <div>
            <h1>Book</h1>
            <div>{book.id}</div>
            <div>{book.selfLink}</div>
            <div>{book.volumeInfo?.title}</div>
            <div>{book.volumeInfo?.authors}</div>
            <div>{book.volumeInfo?.publisher}</div>
            <div>{book.volumeInfo?.publishedDate}</div>
            <div>{book.volumeInfo?.description}</div>
            <div>{book.volumeInfo?.pageCount}</div>
            <div>{book.volumeInfo?.printType}</div>
            <div>{book.volumeInfo?.categories}</div>
            <div>{book.volumeInfo?.allowAnonLogging}</div>
            <div>{book.volumeInfo?.imageLinks?.smallThumbnail}</div>
            <div>{book.volumeInfo?.imageLinks?.thumbnail}</div>
            <div>{book.volumeInfo?.language}</div>
            <div>{book.volumeInfo?.previewLink}</div>
            <div>{book.volumeInfo?.infoLink}</div>
            <div>{book.volumeInfo?.canonicalVolumeLink}</div>

            <div>{book.saleInfo?.country}</div>
            <div>{book.saleInfo?.saleability}</div>
            <div>{book.saleInfo?.isEbook}</div>
            <div>{book.saleInfo?.listPrice?.amount}</div>
            <div>{book.saleInfo?.listPrice?.currencyCode}</div>
            <div>{book.saleInfo?.retailPrice?.amount}</div>
            <div>{book.saleInfo?.retailPrice?.currencyCode}</div>
            <div>{book.saleInfo?.buyLink}</div>

            <div>{book.accessInfo?.country}</div>
            <div>{book.accessInfo?.viewability}</div>
            <div>{book.accessInfo?.embeddable}</div>
            <div>{book.accessInfo?.publicDomain}</div>
            <div>{book.accessInfo?.textToSpeechPermission}</div>
            <div>{book.accessInfo?.textToSpeechPermission}</div>
            <div>{book.accessInfo?.epub?.isAvailable}</div>
            <div>{book.accessInfo?.epub?.acsTokenLink}</div>
            <div>{book.accessInfo?.pdf?.isAvailable}</div>
            <div>{book.accessInfo?.pdf?.acsTokenLink}</div>
            <div>{book.accessInfo?.webReaderLink}</div>
            <div>{book.accessInfo?.accessViewStatus}</div>
            <div>{book.accessInfo?.quoteSharingAllowed}</div>

            <div>{book.searchInfo?.textSnippet}</div>

        </div>
    )
}

export {Book}
