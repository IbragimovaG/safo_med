import React from 'react'
import { IoMail } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { IoArrowForwardCircleSharp } from "react-icons/io5";

export default function Contact() {
  return (
    <div id='contact' className='h-[50vh] w-full text-center'>
<h1 data-aos='zoom-in' className='text-4xl font-bold'>
Sizga qanday yordam kerak ?
</h1>
<h4 className='text-xl text-gray-400 my-10'>
Bizga murojaat qiling
</h4>
<div className='flex lg:flex-row flex-col justify-center gap-10 pt-10'>
<div>
<input type="text" className='relative lg:w-60 w-100 h-14 pl-14 -z-0 border-2 rounded-xl border-sky-400' placeholder='FISH'  />
<FaUser size={25} className='-mt-10 lg:ml-3 ml-24 z-20 relative text-sky-400' />
</div>
<div>
<input type="text" className='relative lg:w-60 w-100 h-14 pl-14 -z-0 border-2 rounded-xl border-sky-400' placeholder='Telefon'  />
<IoMail size={30} className='-mt-11 lg:ml-3 ml-24 z-20 relative text-sky-400' />
</div>
<button className='lg:w-48 w-[65%] lg:m-0 m-auto h-14 flex items-center gap-2 bg-sky-500 justify-center rounded-xl'>
  <p className='text-xl text-white font-bold'>Jo’natish</p>
<IoArrowForwardCircleSharp size={25} className='text-white'/>
</button>
</div>
    </div>
  )
}
