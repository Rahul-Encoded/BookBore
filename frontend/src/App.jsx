import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import CreateBooks from './pages/CreateBooks';
import DeleteBook from './pages/DeleteBook';
import EditBook from './pages/EditBook';
import ShowBooks from './pages/ShowBooks';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home></Home>} />
      <Route path='/books/create' element={<CreateBooks></CreateBooks>} />
      <Route path='/books/details/:id' element={<ShowBooks></ShowBooks>} />
      <Route path='/books/edit/:id' element={<EditBook></EditBook>} />
      <Route path='/books/delete/:id' element={<DeleteBook></DeleteBook>} />
    </Routes>
  )
}

export default App;