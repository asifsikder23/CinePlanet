import React from 'react';

const Title = ({title, Icon}) => {
    return (
        <div className='w-full flex gap-4 md:gap-8 items-center'>
            <Icon className='w-4 md:w-6 h-4 sm:h-6 text-red-600'/>
            <h2 className='text-lg md:text-xl font-bold'>{title}</h2>
        </div>
    );
};

export default Title;