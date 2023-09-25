// create api
// apply store

import {instance} from "./api";

export const booksApi = {
    getAllBooksPage(
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
    ) {
        return instance.get(`v1/volumes/
        ?q=${q}
        +${q_optional}
        &download=${download}
        &filter=${filter}
        &langRestrict=${langRestrict}
        &libraryRestrict=${libraryRestrict}
        &startIndex=${startIndex}
        &maxResults=${maxResults}
        &printType=${printType}
        &projection=${projection}
        &orderBy=${orderBy}
        &partner=${partner}
        &showPreorders=${showPreorders}
        &source=${source}
        &?key=`
        ).then((response) => response.data);
    },
    getAllBooks(
        maxResults: number,
    ) {
        return instance.get(`v1/volumes/
        ?&maxResults=${maxResults}
        &?key=`
        ).then((response) => response.data);
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