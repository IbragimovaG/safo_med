import React from 'react';
import { StarFilled } from "@ant-design/icons";

function AboutUs(props) {
    return (
        <div id='aboutUs' className={'w-full px-5 lg:px-10 pb-96  text-center h-fit'}>
           <div className='h-96 pb-96  w-full relative'>
           <h1 data-aos='fade-down' className={'text-5xl pt-32 lg:pt-0 xl:pt-0 font-bold'}>Qulayliklar</h1>
            <p data-aos='zoom-out' className={'w-full lg:w-6/12  m-auto text-gray-400 pt-5'}>SAFO MED bilan sog‘liqni saqlash bo‘yicha sayohatingiz muammosiz. Tanlangan xizmatlarni davom ettirish uchun quyida keltirilgan amallarni bajaring. Qo'shimcha yo'l-yo'riqlar uchun FAQ bo'limimizni ham ko'rishingiz mumkin:</p>
            <div className={'lg:flex'} >
                <div className={'w-3/4  absolute top-32 '}>
                    <div className='w-full absolute lg:top-32 xl:top-32 md:top-32 top-96 lg:left-48 xl:left-48 left-12 lg:h-96 xl:h-96 h-96 mt-1 border-l-4  border-dashed border-blue-300 '>
                    </div>
                    <div
                        className={'absolute lg:left-40 left-5 lg:top-24 xl:top-24 top-80 '}>
                        <div className='flex  gap-10 '>
                            <div id={'background'}
                                className={'p-2 w-16 h-16 text-5xl rounded-full text-white  '}>
                                <h1>1</h1>
                            </div>
                            <div data-aos='zoom-out' className={'lg:w-96 w-52 lg:left-60 left-0'}>
                                <h1 className={'lg:text-3xl lg:mt-4 text-2xl font-bold text-start'}>Profilingizni yarating</h1>
                                <p className={'text-gray-500 lg:w-11/12 text-start lg:py-5 py-1 '} style={{ color: '#6D6D6D' }}>Ro'yxatdan o'ting va tibbiy tarixingizni xavfsiz
                                    tarzda to'ldiring. Profilingizni shu tarzda o'rnatish sizning tibbiy jarayonlaringizdan
                                    xabardor bo'lishingizni ta'minlaydi.</p>

                            </div>
                        </div>
                        <div className='flex  gap-10 '>
                            <div id={'background'}
                                className={'p-2 w-16 h-16 text-5xl rounded-full text-white  '}>
                                <h1>2</h1>
                            </div>
                            <div data-aos='zoom-out' className={'lg:w-96 w-52 lg:left-60 left-0'}>
                                <h1 className={'lg:text-3xl lg:mt-4 text-2xl font-bold text-start'}>Xizmatingizni tanlang</h1>
                                <p className={'text-gray-500 lg:w-11/12 text-start lg:py-5 py-1 '} style={{ color: '#6D6D6D' }}>Xizmatlarimiz qatoridan tanlang va maslahat uchun buyurtma bering. HealNet bilan maslahatlashuvni bron qilish juda oddiy va tushunarli.</p>

                            </div>
                        </div>
                        <div className='flex  gap-10 '>
                            <div id={'background'}
                                className={'p-2 w-16 h-16 text-5xl rounded-full text-white  '}>
                                <h1>3</h1>
                            </div>
                            <div data-aos='zoom-out' className={'lg:w-96 w-52 lg:left-60 left-0'}>
                                <h1 className={'lg:text-3xl lg:mt-4 text-2xl font-bold text-start'}>Doktoringiz bilan tanishing</h1>
                                <p className={'text-gray-500 lg:w-11/12 text-start lg:py-5 py-1 '} style={{ color: '#6D6D6D' }}>Sertifikatlangan mutaxassislarimizdan biri bilan virtual maslahatlashing yoki jismoniy tekshiruvdan o'tishni tanlagan bo'lsangiz, shifokorga jismoniy tashrif buyuring.</p>

                            </div>
                        </div>
                    </div>
                </div>
                <div data-aos='zoom-out' className={' w-2/4 lg:block xl:block md:hidden hidden absolute top-52 right-0'}>
                    <div
                        className={'lg:w-96 w-80 lg:h-80 h-52  border-2 rounded-2xl border-blue-300 absolute z-0 lg:top-60 lg:left-20 top-20 left-8'}
                        id={'background2'}></div>
                    <img className={'absolute lg:top-40 lg:left-16 top-20 left-20'} src={require('../Assets/doctor3.png')} alt="" />
                    <img className={'absolute lg:top-48 lg:left-96 top-10 left-64'} src={require('../Assets/Group 27.png')} alt="" />
                    <div
                        className={'absolute top-96 mt-20 w-80 ml-28  bg-white py-2  rounded-lg shadow-lg text-start font-bold flex'}
                        style={{ color: '#0069AB' }}><StarFilled className={'mx-6'} />
                        <h4>Eng yaxshi sertifikatlangan
                            mutaxassislar jamoasi</h4></div>
                </div>
            </div>
           </div>
        </div>
    );
}

export default AboutUs;