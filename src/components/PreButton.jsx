import React from 'react';
import { useNavigate } from 'react-router';

const PreButton = () => {
    const navigate = useNavigate();
    return (
        <button className='btn btn-sm btn-secondary' onClick={()=>{navigate(-1)}}>بازگشت</button>
    );
};

export default PreButton;