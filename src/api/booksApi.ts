import {instance} from "./api";
import {searchBooksType} from "../components/SearchForm/SearchForm";
import {bookType} from "../types/types";

export const booksApi = {
    getAllBooksPage (
        {q, q_optional, download, filter, langRestrict, libraryRestrict, startIndex, maxResults, printType, projection, orderBy, partner, showPreorders, source}: searchBooksType
    ) {
    // &download=${download}
    //     const url = `v1/volumes/?q=${q}+${q_optional}&filter=${filter}&langRestrict=${langRestrict}&libraryRestrict=${libraryRestrict}&startIndex=${startIndex}&maxResults=${maxResults}&printType=${printType}&projection=${projection}&orderBy=${orderBy}&partner=${partner}&showPreorders=${showPreorders}&source=${source}&key=${process.env.REACT_APP_API_KEY}`
        const url = `v1/volumes/?q=${q}&startIndex=${startIndex}&maxResults=${40}&key=${process.env.REACT_APP_API_KEY}`
        return instance.get(url).then((response) => response.data);
    },
    // https://books.googleapis.com/books/v1/volumes/?q=${q}&maxResults=60&key=AIzaSyBZtv8srRXwPC-CliYEIZ7Td_6YfziHvl8

    getBook (bookId: string) {
        const url = `v1/volumes/${bookId}?&key=${process.env.REACT_APP_API_KEY}`
        return instance.get(url).then((response) => response.data);
    }
}


// langRestrict: Ограничить результаты книгами с этим языковым кодом

// libraryRestrict:
//                 my-library - Ограничить библиотекой пользователя, любой полкой.
//                 no-restrict

// printType:
//     all — не ограничивается типом печати (по умолчанию).
// books — книгами
// magazines — журналами.

// projection:
//     full — возвращает все поля Volume.
//     lite — возвращает только определенные поля

// orderBy:
//     relevance — в порядке релевантности (по умолчанию).
// newest — от самых последних

// partner Ограничение и брендирование результатов для идентификатора партнера.

// showPreorders - boolean	Установите значение true, чтобы показывать книги,
//     доступные для предварительного заказа.
//     По умолчанию ложно.

// source	string	Строка для идентификации отправителя этого запроса.

