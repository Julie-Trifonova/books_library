import React from "react";
import {bookType} from "../types/types";

type PropsType = {
    book: bookType
}

const BookCard: React.FC<PropsType> = ({book}) => {

    return (
        <div>
            <div>
                <div>Image</div>
                <div>{book.volumeInfo.imageLinks.smallThumbnail}</div>
            </div>
            <div>
                <div>Link</div>
                <div>{book.selfLink}</div>
            </div>
            <div>
                <div>Title</div>
                <div>{book.volumeInfo.title}</div>
            </div>
            <div>
                <div>Authors</div>
                <div>{book.volumeInfo.authors}</div>
            </div>
            <div>
                <div>Category</div>
                <div>{book.volumeInfo.categories}</div>
            </div>
            <div>
                <div>Publisher</div>
                <div>{book.volumeInfo.publisher}</div>
            </div>
            <div>
                <div>Publish Date</div>
                <div>{book.volumeInfo.publishedDate}</div>
            </div>
            <div>
                <div>Description</div>
                <div>{book.volumeInfo.description}</div>
            </div>
            <div>
                {book.volumeInfo.readingModes.text ?
                    <div>Read in Text available</div>
                    : 'Reading in Text is not available'
                }
            </div>
            <div>
                {book.volumeInfo.readingModes.image ?
                    <div>Read in Images available</div>
                    : 'Reading in Images is not available'
                }
            </div>
            <div>
                <div>Pages count</div>
                <div>{book.volumeInfo.pageCount}</div>
            </div>
            <div>
                <div>Print Type</div>
                <div>{book.volumeInfo.printType}</div>
            </div>
            <div>
                <div>Language</div>
                <div>{book.volumeInfo.language}</div>
            </div>
            <div>
                <div>Preview Link</div>
                <div>{book.volumeInfo.previewLink}</div>
            </div>
            <div>
                <div>Info Link</div>
                <div>{book.volumeInfo.infoLink}</div>
            </div>
            <div>
                <div>Canonical Volume Link</div>
                <div>{book.volumeInfo.canonicalVolumeLink}</div>
            </div>
            <div>
                <div>Sale Info Country</div>
                <div>{book.saleInfo.country}</div>
            </div>
            <div>
                <div>Sale Info Saleability</div>
                <div>{book.saleInfo.saleability}</div>
            </div>
            <div>
                <div>Sale Info isEbook</div>
                <div>{book.saleInfo.isEbook}</div>
            </div>
            <div>
                <div>Sale Info listPrice amount</div>
                <div>{book.saleInfo.listPrice.amount}</div>
            </div>
            <div>
                <div>Sale Info listPrice currency</div>
                <div>{book.saleInfo.listPrice.currencyCode}</div>
            </div>
            <div>
                <div>Sale Info buyLink</div>
                <div>{book.saleInfo.buyLink}</div>
            </div>
            <div>
                <div>Access Info </div>
                {/*<div>{book.saleInfo.buyLink}</div>*/}
            </div>
        </div>
    )
}

export {BookCard}