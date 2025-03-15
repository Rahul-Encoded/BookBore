import React, { useState, useEffect } from "react";
import axios from "axios";
import Spinner from "../components/Spinner";
import { Link } from "react-router-dom";
import { MdOutlineAddBox, MdOutlineDelete } from "react-icons/md";
import BooksTable from "../components/home/BooksTable";
import BooksCard from "../components/home/BooksCard";

function Home() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showType, setShowType] = useState("table");

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:3000/api/v1/books")
      .then((response) => {
        setBooks(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="p-4 bg-gray-900 text-white min-h-screen">
      <div className="flex justify-center items-center gap-x-4">
        <button className="border border-sky-400 rounded-md text-sky-400 text-xl px-4 py-1 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-sky-400 hover:text-gray-900" onClick={() => {setShowType("table")}}>Table</button>
        <button className="border border-sky-400 rounded-md text-sky-400 text-xl px-4 py-1 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-sky-400 hover:text-gray-900" onClick={() => {setShowType("card")}}>Card</button>
      </div>
      <div className="flex justify-between items-center">
        <h1 className="text-3xl my-8">Books List</h1>
        <Link to="/books/create">
          <MdOutlineAddBox className="text-sky-400 text-4xl transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-sky-400 hover:text-gray-900" />
        </Link>
      </div>
      {loading ? <Spinner /> : showType==="table" ? (<BooksTable books={books}></BooksTable>) : (<BooksCard books={books}></BooksCard>)}
    </div>
  );
}

export default Home;
