import React from 'react';
import { FaPhoneAlt } from "react-icons/fa";

function Doctors(props) {
    return (
        <div id='info' className='lg:mt-32 mt-52 relative w-full lg:h-[180vh] h-[200vh]'>
            <img className=' lg:block hidden absolute -z-10 top-60 left-72 ' src={require('../Assets/Group 29.png')} alt="" />
            <img className=' lg:block hidden absolute -z-10 bottom-40 right-72 ' src={require('../Assets/Group 28.png')} alt="" />
            <h1 data-aos='fade-down'  className='text-5xl text-center font-bold'>Shifokorlar</h1>
            <p  data-aos='zoom-out' className=' text-center text-gray-400 lg:w-6/12 w-11/12 m-auto my-10'>Bizning mutaxassislar jamoasi tibbiy innovatsiyalar bo'yicha yetakchi hisoblanadi. Sog'ligingiz eng yaxshi qo'llarda bo'lishini ta'minlash uchun har bir mutaxassis tajriba, hamdardlik va tajribaning noyob aralashmasini olib keladi</p>
            <div className='flex flex-col lg:gap-20 m-auto lg:w-[80%] lg:h-[100vh] w-[100%] h-[100vh]'>
                <div className='lg:w-8/12 w-11/12 lg:h-[50%] m-auto mt-16  rounded-3xl lg:text-start text-center  bg-sky-400 flex'>
               <img className=' z-1 w-[80%] h-[55vh] lg:block hidden -ml-4 -mt-10 left-72' src={require('../Assets/Doctors1.png')} alt="" />
         <div className='lg:-ml-[350px] p-5 '>
         <h1 className='text-2xl text-white font-bold mt-5'>Dr. Sarah Johnson (Cardiologist)</h1>
              <p className='text-white text-xl my-4'>
              Heart health is Dr. Wong’s passion, and her approach to cardiology integrates cutting-edge technology with compassionate care. She’s a respected voice in the prevention of heart disease and a trusted partner to her patients on their journey to wellness.
              </p>
              <button  className='bg-white flex lg:justify-around justify-center lg:w-60 w-[100%] px-2 py-3  items-center rounded-xl'>
              <h4 id='color' className='text-xl font-bold'>Book appointment</h4><FaPhoneAlt className='text-blue-400 lg:mx-0 mx-5'  />
              </button>
         </div>
              </div>
                <div className='lg:w-8/12 w-11/12 lg:h-[50%] m-auto mt-16  rounded-3xl lg:text-start text-center  bg-sky-400 flex'>
               <img className=' z-1 w-[100%] h-[59vh] lg:block hidden -ml-4 -mt-16 left-72' src={require('../Assets/Doctors2.png')} alt="" />
         <div className='lg:-ml-[500px] p-5 '>
         <h1 className='text-2xl text-white font-bold mt-5'>Dr. Mark Lee (Dermatologist )</h1>
              <p className='text-white text-xl my-4'>
              Dr. Lee is a visionary in dermatology, advancing treatments for skin health with a gentle, holistic approach. His dedication to clinical excellence and patient education has made him a leader in dermatological care. He’s known for his precision and commitment to patient-centered care.              </p>
              <button  className='bg-white flex lg:justify-around justify-center lg:w-60 w-[100%] px-2 py-3  items-center rounded-xl'>
              <h4 id='color' className='text-xl font-bold'>Book appointment</h4><FaPhoneAlt className='text-blue-400 lg:mx-0 mx-5'  />
              </button>
         </div>
              </div>
            </div>
        </div>
    );
}

export default Doctors;