import React from 'react';
import { useSelector } from 'react-redux';
export const CardEl = () => {
    const {count} = useSelector((state)=>state.counter)
   
    return (
        <div>
            <h1>{count}</h1>
        </div>
    );
}

