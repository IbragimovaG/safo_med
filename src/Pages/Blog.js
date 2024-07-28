import React from 'react';
import person1 from '../Assets/Rectangle 8.svg'
import person2 from '../Assets/Rectangle 8 (1).svg'
import person3 from '../Assets/Rectangle 8 (2).svg'
import person4 from '../Assets/Rectangle 8 (3).svg'

function Blog(props) {
    return (
        <div className={'w-full py-96 h-auto lg:py-44'}>
            <div className='w-full h-full relative pb-96'>
                <h1 className={'text-center font-bold top-0 lg:text-5xl text-2xl lg:pt-32 pt-20 '} >Eng yaxshi sertifikatlangan mutaxassislar
                    jamoasi</h1>
                <p className={'lg:text-xl text-gray-400 text-center lg:pt-32 pt-5 lg:px-0 px-10'}>Biz xizmat qilganlarning ovozi orqali
                    biz qanday farq borligini bilib oling:</p>
                <img className={'absolute lg:flex hidden lg:left-32 left-5 lg:top-96 '} src={require('../Assets/Vector cyrcle.png')} alt="" />
                <div className={'absolute -left-28 lg:left-4 lg:top-96 px-32 lg:mt-12 mt-24  lg:flex gap-32 column1'}>
                    <div data-aos='zoom-down' className={'lg:flex lg:w-fit xl:w-3/5 w-[90%] lg:h-32 h-52 text-center m-auto rounded-3xl  border-2 border-blue-300 lg:py-3 xl:py-5 lg:px-5 xl:px-8 px-2 py-5 my-5 lg:my-0'}
                        id={'background3'}>
                        <img className={'lg:mx-3 ml-32 lg:mb-0 mb-1'} src={person1} alt="" />
                        <p className={'text-gray-500'} style={{ fontSize: '15px' }}>"Tizzimdagi jarrohlik amaliyotimdan so'ng,
                            onlayn maslahatlar
                            qulayligi mening tiklanishimni men tasavvur qilganimdan ham osonlashtirdi."
                            - Linda A.</p>
                    </div>
                    <div data-aos='zoom-down' className={'lg:flex lg:w-fit xl:w-3/5 w-[90%] lg:h-32 h-52 text-center m-auto rounded-3xl  border-2 border-blue-300 lg:py-3 xl:py-5 lg:px-5 xl:px-8 px-2 py-5 my-5 lg:my-0'}
                        id={'background4'}>
                        <img className={'lg:mx-3 ml-32 lg:mb-0 mb-1'} src={person2} alt="" />
                        <p className={'text-gray-500'} style={{ fontSize: '15px' }}>"Qandli diabet kabi surunkali
                            kasalliklarni boshqarish juda ehtiyotkorlikni talab qiladi, ammo dori-darmonlarni to'ldirish
                            tizimi hayotimni soddalashtirdi."
                            - Genri B.</p>
                    </div>
                </div>
                <div className={'lg:flex absolute lg:top-[80%] top-[35%] py-32 bottom-56 lg:left-56  left-20 items-center justify-center  lg:gap-5 xl:gap-20 column2'}>
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
                <div className={'absolute -left-28 lg:left-4 lg:top-[110%] top-[210%] px-32 lg:mt-12 mt-24  lg:flex gap-32 column1'}>
                    <div data-aos='zoom-down' className={'lg:flex lg:w-fit xl:w-3/5 w-[90%] lg:h-32 h-52 text-center m-auto rounded-3xl  border-2 border-blue-300 lg:py-3 xl:py-5 lg:px-5 xl:px-8 px-2 py-5 my-5 lg:my-0'}
                        id={'background3'}>
                        <img className={'lg:mx-3 ml-32 lg:mb-0 mb-1'} src={person3} alt="" />
                        <p className={'text-gray-500'} style={{ fontSize: '15px' }}>“Retsept bo'yicha to'ldirish tizimi mening
                            diabetimni boshqarish uchun o'yinni o'zgartiradi. Bu haqiqatan ham samarali va mutlaqo
                            muammosiz."
                            - Joshua T.</p>
                    </div>
                    <div data-aos='zoom-down' className={'lg:flex z-10 lg:w-fit xl:w-3/5 w-[90%] lg:h-32 h-52 text-center m-auto rounded-3xl  border-2 border-blue-300 lg:py-3 xl:py-5 lg:px-5 xl:px-8 px-2 py-5 my-5 lg:my-0'}
                        id={'background4'}>
                        <img className={'lg:mx-3 ml-32 lg:mb-0 mb-1'} src={person4} alt="" />
                        <p className={'text-gray-500'} style={{ fontSize: '15px' }}>“Sog'ligimga bo'lgan barcha ehtiyojlarimni
                            tushunadigan shifokorni topish hech qachon oson bo'lmagan. Ushbu platforma mening hayotimni
                            o'zgartirdi. ”
                            - Samanta K.</p>
                    </div>
                </div>
                <img className={'absolute lg:flex hidden right-24 -z-0 lg:top-[125%] '} src={require('../Assets/Vector cyrcle.png')} alt="" />
            </div>
        </div>
    );
}

export default Blog;