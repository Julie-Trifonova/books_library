import React from 'react';
import {HashRouter, Route, Routes} from "react-router-dom";
import { Provider } from "react-redux";
import store from './redux/reduxStore'
import {BooksLibrary} from "./components/pages/BooksLibrary";

function App() {
  return (
      <div>
        <HashRouter>
          <Provider store={store}>
            <Routes>
              <Route path='/booksLibrary' element={<BooksLibrary/>}/>
              <Route path='*' element={<BooksLibrary/>}/>
            </Routes>
          </Provider>
        </HashRouter>
      </div>
  );
}

export default App;