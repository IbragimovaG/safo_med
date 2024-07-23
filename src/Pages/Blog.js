import React from 'react';
import person1 from '../Assets/Rectangle 8.svg'
import person2 from '../Assets/Rectangle 8 (1).svg'
import person3 from '../Assets/Rectangle 8 (2).svg'
import person4 from '../Assets/Rectangle 8 (3).svg'

function Blog(props) {
    return (
        <div className={'w-full lg:h-screen h-[270vh] lg:mt-44 pt-96 lg:pt-0 mt-96 px-5 relative'}>
            <h1 className={'text-center font-bold'} style={{fontSize: '40px'}}>Eng yaxshi sertifikatlangan mutaxassislar
                jamoasi</h1>
            <p className={'lg:text-xl text-gray-400 text-center lg:mt-20 mt-5'}>Biz xizmat qilganlarning ovozi orqali
                biz qanday farq borligini bilib oling:</p>
            <img className={'absolute lg:flex hidden lg:left-32 left-5 lg:top-40 '} src={require('../Assets/Vector cyrcle.png')} alt=""/>
            <div  className={'absolute -left-28 lg:left-4 lg:top-40 px-32 lg:mt-12 mt-24 lg:ml-5 lg:flex gap-32 column1'}>
                <div data-aos='zoom-down' className={'flex lg:w-2/5 w-auto lg:h-32 h-44 rounded-3xl  border-2 border-blue-300 lg:py-3 lg:px-8 px-2 py-5 my-5 lg:my-0'}
                     id={'background3'}>
                    <img className={'mx-3'} src={person1} alt=""/>
                    <p className={'text-gray-500'} style={{fontSize: '15px'}}>"Tizzimdagi jarrohlik amaliyotimdan so'ng,
                        onlayn maslahatlar
                        qulayligi mening tiklanishimni men tasavvur qilganimdan ham osonlashtirdi."
                        - Linda A.</p>
                </div>
                <div data-aos='zoom-down' className={'flex lg:w-2/5 w-auto lg:h-32 h-44 rounded-3xl  border-2 border-blue-300 lg:py-3 lg:px-8 px-2 py-5 my-5 lg:my-0'}
                     id={'background4'}>
                    <img className={'mx-3'} src={person2} alt=""/>
                    <p className={'text-gray-500'} style={{fontSize: '15px'}}>"Qandli diabet kabi surunkali
                        kasalliklarni boshqarish juda ehtiyotkorlikni talab qiladi, ammo dori-darmonlarni to'ldirish
                        tizimi hayotimni soddalashtirdi."
                        - Genri B.</p>
                </div>
            </div>
            <div className={'lg:flex absolute lg:top-48  lg:left-48 left-20 items-center justify-center  gap-14 mt-56 column2'}>
                <div className={'lg:w-60 w-38 h-32 text-center'}>
                    <h1 className={'text-5xl font-bold'} id={'color'}>10,000+</h1>
                    <p className={'text-center text-gray-500'}>Muvaffaqiyatli maslahatlashuvlar</p>
                </div>
                <div className={'lg:w-52 w-38 h-32 text-center'}>
                    <h1 className={'text-5xl font-bold'} id={'color'}>2,500+</h1>
                    <p className={'text-center text-gray-500'}>Sog'liqni saqlash mutaxassislari</p>
                </div>
                <div className={'lg:w-52 w-38 h-32 text-center'}>
                    <h1 className={'text-5xl font-bold'} id={'color'}>98%</h1>
                    <p className={'text-center text-gray-500'}>Bemorning qoniqish darajasi</p>
                </div>
                <div className={'lg:w-52 w-38 h-32 text-center'}>
                    <h1 className={'text-5xl font-bold'} id={'color'}>200+</h1>
                    <p className={'text-center text-gray-500'}>Eng yaxshi mutaxassislar</p>
                </div>
            </div>
            <div  className={'absolute -left-32  lg:left-4 lg:bottom-8 px-32 lg:mt-12 lg:ml-5  lg:flex gap-32 z-10 column3'}>
                <div data-aos='zoom-down' className={'flex lg:w-2/5 lg:mt-0 w-auto lg:h-32 h-44 rounded-3xl  border-2 border-blue-300 lg:py-3 lg:px-8 px-2 py-5 my-5 lg:my-0'}
                     id={'background3'}>
                    <img className={'mx-3'} src={person3} alt=""/>
                    <p className={'text-gray-500'} style={{fontSize: '15px'}}>“Retsept bo'yicha to'ldirish tizimi mening
                        diabetimni boshqarish uchun o'yinni o'zgartiradi. Bu haqiqatan ham samarali va mutlaqo
                        muammosiz."
                        - Joshua T.</p>
                </div>
                <div data-aos='zoom-down' className={'flex lg:w-2/5 w-auto lg:h-32 h-44 rounded-3xl  border-2 border-blue-300 lg:py-3 lg:px-8 px-2 py-5 my-5 lg:my-0'}
                     id={'background4'}>
                    <img className={'mx-3'} src={person4} alt=""/>
                    <p className={'text-gray-500'} style={{fontSize: '15px'}}>“Sog'ligimga bo'lgan barcha ehtiyojlarimni
                        tushunadigan shifokorni topish hech qachon oson bo'lmagan. Ushbu platforma mening hayotimni
                        o'zgartirdi. ”
                        - Samanta K.</p>
                </div>
            </div>
            <img className={'absolute lg:flex hidden right-44 lg:bottom-0 '} src={require('../Assets/Vector cyrcle.png')} alt=""/>
        </div>
    );
}

export default Blog;