export type bookType = {
    id: string;
    selfLink: string;
    volumeInfo: volumeInfoType;
    saleInfo: saleInfo;
    accessInfo: accessInfo;
    searchInfo: searchInfo;
}

export type volumeInfoType = {
    title: string;
    authors: string;
    publisher: string;
    publishedDate: string;
    description: string;
    pageCount: number;
    printType: string;
    categories: Array<string>;
    allowAnonLogging: boolean;
    imageLinks: {
        smallThumbnail: string,
        thumbnail: string,
    },
    language: string;
    previewLink: string;
    infoLink: string;
    canonicalVolumeLink: string;
}

export type saleInfo = {
    country: string;
    saleability: string;
    isEbook: boolean;
    listPrice: {
        amount: number,
        currencyCode: string,
    },
    retailPrice: {
        amount: number,
        currencyCode: string,
    },
    buyLink: string;
}

export type accessInfo = {
    country: string;
    viewability: string; //"PARTIAL",
    embeddable: boolean;
    publicDomain: boolean;
    textToSpeechPermission: string;
    epub: {
        isAvailable: boolean,
        acsTokenLink: string,
    };
    pdf: {
        isAvailable: false
    };
    webReaderLink: string;
    accessViewStatus: string;
    quoteSharingAllowed: boolean;
}

export type searchInfo = {
    textSnippet: string;
}


// {
//     "kind": "books#volume",
//     "id": "jSbZDQAAQBAJ",
//     "etag": "Mn8qo3ZasqM",
//     "selfLink": "https://",
//     "volumeInfo": {
//         "title": "Alice's Adventures in Wonderland",
//         "authors": ["Lewis Carroll"],
//         "publisher": "Lindhardt",
//         "publishedDate": "2020-10-29",
//         "description": "",
//         "industryIdentifiers": [
//             {"type": "ISBN_13", "identifier": "9789176393604"},
//             {"type": "ISBN_10", "identifier": "9176393607"}
//         ],
//         "readingModes": {"text": true, "image": false},
//         "pageCount": 200,
//         "printType": "BOOK",
//         "categories": ["Fiction"],
//         "maturityRating": "NOT_MATURE",
//         "allowAnonLogging": false,
//         "contentVersion": "1.10.9.0.preview.2",
//         "panelizationSummary": {
//              "containsEpubBubbles": false,
//              "containsImageBubbles": false
//          },
//          "imageLinks": {
//              "smallThumbnail": "http:",
//              "thumbnail": "http:"
//          },
//          "language": "en",
//          "previewLink": "http:/",
//          "infoLink": "https:/",
//          "canonicalVolumeLink": "https:/"
//     },
//     "saleInfo": {
//         "country": "RU",
//         "saleability": "FOR_SALE",
//         "isEbook": true,
//         "listPrice": {
//              "amount": 349.44,
//              "currencyCode": "RUB"
//          },
//          "retailPrice": {
//              "amount": 314.5,
//              "currencyCode": "RUB"
//          },
//          "buyLink": "https://",
//         "offers": [{
//             "finskyOfferType": 1,
//              "listPrice": {
//                      "amountInMicros": 349440000,
//                      "currencyCode": "RUB"
//              },
//              "retailPrice": {
//                      "amountInMicros": 314500000,
//                      "currencyCode": "RUB"
//               }
//         }]
//      },
//     "accessInfo": {
//          "country": "RU",
//          "viewability": "PARTIAL",
//          "embeddable": true,
//          "publicDomain": false,
//          "textToSpeechPermission": "ALLOWED",
//          "epub": {
//                 "isAvailable": true,
//               "acsTokenLink": "http://"
//          },
//          "pdf": {
//              "isAvailable": false
//          },
//          "webReaderLink": "http://",
//         "accessViewStatus": "SAMPLE",
//         "quoteSharingAllowed": false
//     },
//     "searchInfo": {
//           "textSnippet": "At this the whole pack rose"
//      }
// },