import React from 'react';
import {StarFilled} from "@ant-design/icons";

function AboutUs(props) {
    return (
        <div className={'w-full h-screen px-5 lg:px-32 text-center lg:mt-0 mt-96'}>
            <h1 className={'text-5xl pt-32 lg:pt-0 font-bold'}>Qulayliklar</h1>
            <p className={'w-full lg:w-6/12  m-auto text-gray-400 mt-5 lg:mt-10'}>SAFO MED bilan sog‘liqni saqlash bo‘yicha sayohatingiz muammosiz. Tanlangan xizmatlarni davom ettirish uchun quyida keltirilgan amallarni bajaring. Qo'shimcha yo'l-yo'riqlar uchun FAQ bo'limimizni ham ko'rishingiz mumkin:</p>
            <div className={'lg:flex'}  style={{height:'90vh'}}>
                <div className={'w-1/2 h-full lg:pt-20 relative'}>
                    <div style={{height: '60vh'}}
                         className={'border-l border-l-2 w-1/3 border-dashed border-blue-400 absolute lg:left-40 left-14 lg:top-20  top-10 '}>
                        <div id={'background'}
                             className={'p-1 w-16 h-16 text-5xl rounded-full text-white absolute top-0 -left-8'}>
                            <h1>1</h1>
                        </div>
                        <div id={'background'}
                             className={'p-1 w-16 h-16 text-5xl rounded-full text-white absolute lg:top-48 top-60 -left-8'}>
                            <h1>2</h1>
                        </div>
                        <div id={'background'}
                             className={'p-1 w-16 h-16 text-5xl rounded-full text-white absolute lg:bottom-0 -bottom-16 -left-8'}>
                            <h1>3</h1>
                        </div>
                    </div>
                    <div className={'lg:w-96 w-60 absolute lg:left-60 lg:top-24 left-28 top-12'}>
                        <h1 className={'lg:text-3xl text-2xl font-bold text-start'}>Profilingizni yarating</h1>
                        <p className={'text-gray-500 text-start lg:py-3 py-1 lg:w-10/12 w-60 '} style={{color:'#6D6D6D'}}>Ro'yxatdan o'ting va tibbiy tarixingizni xavfsiz
                            tarzda to'ldiring. Profilingizni shu tarzda o'rnatish sizning tibbiy jarayonlaringizdan
                            xabardor bo'lishingizni ta'minlaydi.</p>
                    </div>
                    <div className={'lg:w-96 w-60 absolute lg:left-60 lg:top-72 left-28 bottom-48'}>
                        <h1 className={'lg:text-3xl text-2xl font-bold text-start'}>Xizmatingizni tanlang</h1>
                        <p className={'text-gray-500 text-start lg:py-3 py-1 lg:w-10/12 w-full'} style={{color:'#6D6D6D'}}> Xizmatlarimiz qatoridan tanlang va maslahat uchun
                            buyurtma bering.
                            HealNet bilan maslahatlashuvni bron qilish juda oddiy va tushunarli.</p>
                    </div>
                    <div className={'lg:w-96 w-60 absolute lg:left-60 lg:bottom-3 left-28 -bottom-10'}>
                        <h1 className={'lg:text-3xl text-2xl lg:w-full w-full font-bold text-start'}>Doktoringiz bilan tanishing</h1>
                        <p className={'text-gray-500 text-start lg:py-3 py-1 lg:w-10/12 w-full'} style={{color:'#6D6D6D'}} >Sertifikatlangan mutaxassislarimizdan biri bilan virtual maslahatlashing yoki
                            jismoniy tekshiruvdan o'tishni tanlagan bo'lsangiz, shifokorga jismoniy tashrif buyuring.</p>
                    </div>
                </div>
                <div className={'w-1/2 h-full relative'}>
                    <div
                        className={'lg:w-96 w-80 lg:h-80 h-52 border border-2 rounded-2xl border-blue-300 absolute z-0 lg:top-60 lg:left-20 top-20 left-8'}
                        id={'background2'}></div>
                    <img  className={'absolute lg:top-40 lg:left-16 top-20 left-20'} src={require('../Assets/doctor3.png')} alt=""/>
                    <img className={'absolute lg:top-48 lg:left-96 top-10 left-64'} src={require('../Assets/Group 27.png')} alt=""/>
                    <div
                        className={'absolute lg:bottom-40 w-80 lg:left-40 bottom-80 bg-white py-2  rounded-lg shadow-lg text-start font-bold flex'}
                        style={{color: '#0069AB'}}><StarFilled className={'mx-6'}/>
                    <h4>Eng yaxshi sertifikatlangan
                        mutaxassislar jamoasi</h4></div>
                </div>
            </div>
        </div>
    );
}

export default AboutUs;