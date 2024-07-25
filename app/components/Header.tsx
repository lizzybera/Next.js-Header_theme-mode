"use client"

import React, { useState } from 'react'
import { MdDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux';
import { onToggled } from '../global/slice';
import { ModeToggle } from './Mode';



const Header = () => {
    const dispatch = useDispatch()
    // const [toggle, setToggle] = useState<boolean>(false)
    const toggle = useSelector((state : any) => state.toggle)

    // const onToggle = () =>{
    //     setToggle(!toggle)
    // }

  return (
    // this is for useState and redux persist
    // <div className={`w-full h-[80px] border-b-2 border-blue-400 flex justify-end items-center ${!toggle? "bg-white text-black" : "bg-black text-white"} px-10 text-[20px] cursor-pointer`} >
    //     {
    //         !toggle ? <MdDarkMode onClick={()=>{
    //             // onToggle
    //             dispatch(onToggled())
    //         }} /> : <MdOutlineLightMode onClick={()=>{
    //             // onToggle
    //             dispatch(onToggled())
    //         }}  />
    //     }
    // </div>

    // this is for shadcn
    <div>
        <ModeToggle />
    </div>
  )
}

export default Header