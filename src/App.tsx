import React from 'react';
import {
    HashRouter,
    Route,
    Routes
} from "react-router-dom";
import { Provider } from "react-redux";
import store from './redux/reduxStore'
import {BooksLibrary} from "./components/pages/BooksLibrary/BooksLibrary";
import s from './App.module.css'
import {Book} from "./components/Book/Book";

function App() {

  return (
      <div>
        <HashRouter>
          <Provider store={store}>
            <Routes>
              <Route path='/' element={<BooksLibrary/>}/>
              <Route path="/:bookId" element={<Book/>}/>
            </Routes>
          </Provider>
        </HashRouter>
      </div>
  );
}

export default App;

