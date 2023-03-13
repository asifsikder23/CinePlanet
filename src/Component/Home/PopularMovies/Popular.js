import React from 'react';
import { FaHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Popular = ({popular}) => {
    const {name, titleImg, _id}= popular;
    return (
        <>
            <div className='border border-border p-1 hover:scale-95 transition relative rounded overflow-hidden'>
                <Link
                to={`/watch/${_id}`}
                className='w-full'>
                    <img src={titleImg} alt="" className=''/>
                </Link>
                <div className='absolute flex justify-between gap-2 bottom-0 right-0 left-0 bg-slate-900 bg-opacity-60 text-white px-4 py-3'>
                    <h3 className='font-semibold truncate'>{name}</h3>
                    <button className='h-9 w-9 text-sm flex justify-center items-center transition hover:bg-transparent border-2 border-red-600 rounded-md bg-red-600 text-white'>
                        <FaHeart/>
                    </button>
                </div>
            </div>
        </>
    );
};

export default Popular;