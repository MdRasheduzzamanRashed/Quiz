import React from 'react';

const Option = ({ option }) => {
    return (
        <div className='p-3 border text-sm cursor-pointer hover:bg-slate-300'>
            <li> { option}</li>
        </div>
    );
};

export default Option;