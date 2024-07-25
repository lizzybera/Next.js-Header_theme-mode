"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import { FaFacebook, FaTwitter } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa6'

const Header2 = () => {
    const path = usePathname()

    const navData = [
        {
            id : 1,
            name : "Facebook",
            icon : <FaFacebook />,
            url : "/"
        },
        {
            id : 2,
            name : "Twitter",
            icon : <FaTwitter />,
            url : "/twit"
        },
        {
            id : 3,
            name : "LinkedIn",
            icon : <FaLinkedin />,
            url : "/linked"
        },
    ]
  return (
    <div className='w-full h-[80px] flex justify-between items-center border-b-2 px-6'>
        <div> Logo </div>

        <div className='flex justify-center items-center gap-3 '>
            {
                navData.map((el) =>(
                    <div key={el.id}>
                        <Link href={el.url} className={`flex flex-col justify-center items-center hover:text-blue-500 transition-all duration-75 ${path === el.url ? "text-black" : " text-gray-500 "}`} >
                <div className='text-[30px]'>{el.icon}</div>
                <div>{el.name}</div>
            </Link>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Header2