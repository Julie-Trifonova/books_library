import {instance} from "./api";
import {searchBooksType} from "../components/SearchForm/SearchForm";

export const booksApi = {
    getAllBooksPage (
        {q, q_optional, download, filter, langRestrict, libraryRestrict, startIndex, maxResults, printType, projection, orderBy, partner, showPreorders, source}: searchBooksType
    ) {
    // &download=${download}
        const url = `v1/volumes/?q=${q}+${q_optional}&filter=${filter}&langRestrict=${langRestrict}&libraryRestrict=${libraryRestrict}&startIndex=${startIndex}&maxResults=${maxResults}&printType=${printType}&projection=${projection}&orderBy=${orderBy}&partner=${partner}&showPreorders=${showPreorders}&source=${source}&key=${process.env.REACT_APP_API_KEY}`
        // const url = `v1/volumes/?q=${q}&key=${process.env.REACT_APP_API_KEY}`
        return instance.get(url).then((response) => response.data);
    }
}

// Выполнение поиска не требует аутентификации,
// поэтому вам не нужно предоставлять HTTP-заголовок
// Authorization вместе с запросом GET .
// Однако, если вызов выполняется с аутентификацией,
// каждый том будет содержать информацию о пользователе,
// такую ​​как статус покупки.

// q=''+'parameter'
// q=flowers+inauthor
// parameter:
//     intitle: текст находится в заголовке.
//     inauthor: текст найден у автора.
//     inpublisher: текст найден в издателе.
//     subject: текст указан в списке категорий тома.
//     isbn: текст является номером ISBN.
//     lccn: текст является контрольным номером Библиотеки Конгресса.
//     oclc: текст является номером центра компьютерной онлайн-библиотеки.

// download=epub

// filter:
//     partial — хотя бы часть текста доступна для предварительного просмотра.
//     full — виден весь текст.
//     free-ebooks — бесплатные электронные книги Google.
//     paid-ebooks — являются электронными книгами Google с указанием цены.
//     ebooks — являются электронными книгами Google, платными или бесплатными.
//     Примерами неэлектронных книг может быть контент издателя, доступный в ограниченном
// предварительном просмотре и не предназначенный для продажи, или журналы.

// langRestrict: Ограничить результаты книгами с этим языковым кодом

// libraryRestrict:
//                 my-library - Ограничить библиотекой пользователя, любой полкой.
//                 no-restrict

// startIndex — позиция в коллекции, с которой следует начать.
//     Индекс первого элемента равен 0.

// maxResults — по умолчанию — 10, а максимально — 40.

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



// Получение определенного тома
// v1/volumes/volumeId?key=
//     если вызов выполняется с аутентификацией,
//     объем будет включать информацию о пользователе,
//     такую как статус покупки.