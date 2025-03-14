import React from 'react';
import { Link } from 'react-router-dom';
import { BsArrowLeft } from 'react-icons/bs';

function BackButton({destination = "/"}) {
	return (
		<div className='flex'>
			<Link to = {destination} className='text-sky-400 text-4xl transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-sky-400 hover:text-gray-900'>
				<BsArrowLeft className='text-2xl'></BsArrowLeft>
			</Link>
		</div>
	)
}

export default BackButton;