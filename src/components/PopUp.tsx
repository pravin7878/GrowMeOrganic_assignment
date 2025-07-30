import React, { useState } from 'react'
import { FaAngleUp, FaAngleDown } from "react-icons/fa";

export const PopUp = ({ setRowToSelect, isClicked, setisClicked,onSubmit }) => {
    const [selectCount, setselectCount] = useState(0)


    // const handleSubmit = () => {
    //     setisClicked(false)
    //     setRowToSelect(selectCount)
    // }




    return (
        <div className='reletive'>
            {isClicked ?
                <FaAngleDown className='cursor-pointer text-2xl' onClick={() => setisClicked(!isClicked)} />
                : <FaAngleUp className='cursor-pointer text-2xl' onClick={() => setisClicked(!isClicked)}
                />}

            {isClicked ?
                <div className='absolute flex flex-col gap-2 bg-gray-50 border-2 p-3 mt-3 rounded-md'>
                    <input value={selectCount} onChange={(e) => setselectCount(e.target.value)} className='px-3 py-1 bg-gray-150' type="number" placeholder='Select Rows' />
                    <button className='bg-sky-400 px-3 py-1 rounded-md cursor-pointer' onClick={()=>onSubmit(selectCount)}>Submit</button>
                </div>
                : ""}
        </div>
    )
}
