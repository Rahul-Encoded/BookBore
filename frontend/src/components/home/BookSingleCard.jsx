import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { PiBookOpenTextLight } from 'react-icons/pi';
import { BiShow, BiUserCircle} from 'react-icons/bi';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineDelete } from 'react-icons/md';
import BookModal from "./BookModal";

function BookSingleCard({ book }) {
	const [showModal, setShowModal] = useState(false);

  return (
    <div
      key={book._id}
      className="border-2 border-gray-500 rounded-lg px-4 py-2 m-4 relative hover:shadow-xl"
    >
      <h2 className="absolute top-1 right-2 px-4 py-1 bg-red-300 rounded-lg">
        {book.publishYear}
      </h2>
      <h4 className="my-2 text-gray-500">{book._id}</h4>
      <div className="flex justify-start items-center gap-x-2">
        <PiBookOpenTextLight className="text-red-300 text-2xl"></PiBookOpenTextLight>
        <h2 className="my-1">{book.title}</h2>
      </div>
      <div className="flex justify-start items-center gap-x-2">
        <BiUserCircle className="text-red-300 text-2xl"></BiUserCircle>
        <h2 className="my-1">{book.author}</h2>
      </div>
      <div className="flex justify-between items-center gap-x-2 mt-4 p-4">
				<BiShow className="border rounded-full text-3xl text-blue-800 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-blue-800 hover:text-gray-900" onClick={() => {setShowModal(true)}}></BiShow>
        <Link to={`books/details/${book._id}`}>
          <BsInfoCircle className="border rounded-full text-2xl text-sky-400 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-sky-400 hover:text-gray-900"></BsInfoCircle>
        </Link>
        <Link to={`/books/edit/${book._id}`}>
          <AiOutlineEdit className="border rounded-full text-2xl text-yellow-600 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-yellow-600 hover:text-gray-900" />
        </Link>
        <Link to={`/books/delete/${book._id}`}>
          <MdOutlineDelete className="border rounded-full text-2xl text-red-600 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-red-600 hover:text-gray-900" />
        </Link>
      </div>
			{
				showModal && (<BookModal book={book} onClose={() => {setShowModal(false)}}></BookModal>)
			}
    </div>
  );
}

export default BookSingleCard;
