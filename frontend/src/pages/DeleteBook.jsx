import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';

function DeleteBook() {
	const [loading, setLoading] = useState(false);
	const navigate = useNavigate();
	const {id} = useParams();
	const handleDelete = () => {
		setLoading(true);
		axios
			.delete(`http://localhost:3000/api/v1/books/${id}`)
			.then(() => {
				setLoading(false);
				navigate("/");
			}).catch((error) => {
				setLoading(false);
				alert("An error occured. Please Check the console!");
			})
	}

	return (
		<div className='p-4 bg-gray-900 text-white min-h-screen'>
			<div className="flex justify-between items-center">
			<h1 className='text-3xl my-4'>Delete Book</h1>
			<BackButton></BackButton>
			</div>
			{loading ? <Spinner></Spinner> : ""}
			<div className='flex flex-col items-center border-2 border-sky-400 rounded-xl w-[600px] p-8 mx-auto'>
				<h3 className='text-2xl'>Are you sure you wish to delete this book</h3>
				<button
          className='p-4 bg-red-600 text-white m-8 w-full'
          onClick={handleDelete}
        >
          Yes, Delete it
        </button>
			</div>

			 
		</div>
	)
}

export default DeleteBook;