import React from 'react'
import logo from '../Assets/logoFooter.svg'
import facebook from '../Assets/ic_baseline-facebook.svg'
import instagram from '../Assets/mdi_instagram.svg'
import linkedin from '../Assets/mdi_linkedin.svg'
import youtube from '../Assets/mdi_youtube.svg'
export default function Footer() {
  return (
    <div className=' w-full lg:mt-32 mt-52 py-10 h-auto bg-blue-50'>
      <div className=' lg:flex lg:flex-row flex-col w-full  lg:gap-5 xl:pl-32 lg:pl-24 pl-16'>
        <div className='w-[100%] lg:w-1/4 py-14 pt-20 lg:px-5'>
        <a  href="home"><img src={logo} alt="" /></a>
          <p className='mt-10 lg:w-auto w-60'>Experience personalized medical care from the comfort of your home.</p>
        </div>
        <div className='w-[100%] lg:w-1/4 py-14 lg:pl-5'>
          <h3 id='color' className='text-xl font-bold'>Support</h3>
          <p className='my-5 mt-8'>Getting Started</p>
          <p className='my-5'>FAQS</p>
          <p className='my-5'>Help Articles</p>
          <p className='my-5'>Report an issue</p>
          <p className='my-5'>Contact Help Desk</p>
        </div>
        <div className='w-[100%] lg:w-1/4 py-14 lg:pl-5'>   <h3 id='color' className='text-xl font-bold'>Services</h3>
          <p className='my-5 mt-8'>Booking appointments</p>
          <p className='my-5'>Online consultations</p>
          <p className='my-5'>Prescriptions</p>
          <p className='my-5'>Medicine Refills</p>
          <p className='my-5'>Medical Notes</p></div>
        <div className='w-[100%] lg:w-1/4 py-14 lg:pl-5'>
          <h3 id='color' className='text-xl font-bold'>Legal</h3>
          <p className='my-5 mt-8'>Terms & Conditions</p>
          <p className='my-5'>Privacy </p>
          <p className='my-5'>Cookie Notice</p>
          <p className='my-5'>Cookie Preferences</p>
          <p className='my-5'>Trust Center</p></div>
      </div>
      <hr className='w-[81%] h-[2px] bg-sky-300 m-auto' />
      <div className='flex lg:flex-row flex-col lg:px-36 pl-10 lg:justify-between lg:items-center'>
        <div className='gap-3 flex items-center pt-5'>
          <img className='' src={facebook} alt="" />
          <img className='' src={instagram} alt="" />
          <img className='' src={linkedin} alt="" />
          <img className='' src={youtube} alt="" />
        </div>
        <h4 className='text-gray-400 tetx-2xl mt-5'>HealNet 2024 © All Rights Reserved</h4> 
      </div>
    </div>
  )
}
