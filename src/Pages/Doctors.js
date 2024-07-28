import React from 'react';
import { FaPhoneAlt } from "react-icons/fa";

function Doctors(props) {
    return (
        <div id='info' className='relative w-full h-auto py-60'>
            <img className=' lg:block hidden absolute -z-10 xl:top-[25%] xl:left-72 lg:top-[24%] lg:left-56' src={require('../Assets/Group 29.png')} alt="" />
            <img className=' lg:block hidden absolute -z-10 xl:bottom-64 xl:right-72 lg:bottom-56 lg:right-56' src={require('../Assets/Group 28.png')} alt="" />
            <h1 data-aos='fade-down'  className='text-5xl text-center font-bold absolute xl:top-52 xl:left-[43%] lg:top-52 lg:left-[42%] top-[36%] left-[17%]'>Shifokorlar</h1>
            <p  data-aos='zoom-out' className=' text-center text-gray-400 absolute xl:top-60 lg:top-60 top-[38%] lg:px-80 px-8 my-10'>Bizning mutaxassislar jamoasi tibbiy innovatsiyalar bo'yicha yetakchi hisoblanadi. Sog'ligingiz eng yaxshi qo'llarda bo'lishini ta'minlash uchun har bir mutaxassis tajriba, hamdardlik va tajribaning noyob aralashmasini olib keladi</p>
            <div className='flex flex-col lg:gap-20  xl:px-32 lg:px-16'>
                <div className='lg:w-8/12 lg:mt-40 mt-[250%] w-11/12 lg:h-96 m-auto  rounded-3xl lg:text-start text-center  bg-sky-400 flex'>
               <img className=' z-1 w-full h-96 lg:block hidden -ml-4  left-72' src={require('../Assets/Doctors1.png')} alt="" />
         <div className='lg:-ml-[350px] p-5 '>
         <h1 className='text-2xl text-white font-bold mt-5'>Dr. Sarah Johnson (Cardiologist)</h1>
              <p className='text-white text-xl my-4'>
              Heart health is Dr. Wong’s passion, and her approach to cardiology integrates cutting-edge technology with compassionate care. She’s a respected voice in the prevention of heart disease and a trusted partner to her patients on their journey to wellness.
              </p>
              <button  className='bg-white flex xl:mt-16 mt-10 lg:justify-around justify-center lg:w-60 w-[100%] px-2 py-3  items-center rounded-xl'>
              <h4 id='color' className='text-xl font-bold'>Book appointment</h4><FaPhoneAlt className='text-blue-400 lg:mx-0 mx-5'  />
              </button>
         </div>
              </div>
                <div className='lg:w-8/12 lg:mt-5 mt-20 w-11/12 lg:h-96 m-auto  rounded-3xl lg:text-start text-center  bg-sky-400 flex'>
               <img className=' z-1 w-full h-96 lg:block hidden -ml-5' src={require('../Assets/Doctors2.png')} alt="" />
         <div className='lg:-ml-[500px] p-5 '>
         <h1 className='text-2xl text-white font-bold mt-5'>Dr. Mark Lee (Dermatologist )</h1>
              <p className='text-white text-xl my-4'>
              Dr. Lee is a visionary in dermatology, advancing treatments for skin health with a gentle, holistic approach. His dedication to clinical excellence and patient education has made him a leader in dermatological care. He’s known for his precision and commitment to patient-centered care.              </p>
              <button  className='bg-white flex mt-12 lg:justify-around justify-center lg:w-60 w-[100%] px-2 py-3  items-center rounded-xl'>
              <h4 id='color' className='text-xl font-bold'>Book appointment</h4><FaPhoneAlt className='text-blue-400 lg:mx-0 mx-5'  />
              </button>
         </div>
              </div>
            </div>
        </div>
    );
}

export default Doctors;