import React from 'react';

function Service(props) {
    return (
        <div id={'service'} className={'w-full h-fit mt-32 relative'}>
            <h1 className={'text-center text-5xl font-bold '}>Bizning xizmatlar</h1>
            <p className={'m-auto text-center font-medium mt-10 text-gray-400 w-full lg:w-6/12 px-5 lg:px-0'}>Bugungi tez sur'atlar bilan
                rivojlanayotgan dunyoda sizning sog'lig'ingiz
                eng katta e'tibor va qulaylikka loyiqdir. Shuning
                uchun SAFO MED sogʻliqni saqlash ehtiyojlarini raqamli ravishda o’zining qulay xizmatlarini taklif
                etadi</p>
            <img src={require('../Assets/vector5.png')} className={'absolute lg:top-44 lg:left-28 top-72 left-0 w-48'} alt=""/>
            <img src={require('../Assets/vector6.png')} className={'absolute lg:bottom-14 lg:right-32 bottom-24 right-0  w-48'} alt=""/>
                <div className={'lg:flex lg:px-32 px-5 gap-5 lg:ml-16 lg:mt-10 mt-16'}>
                    <div
                        className={'w-full lg:w-7/12 my-10 lg:my-0 rounded-3xl outline outline-2 outline-blue-200 flex flex-col gap-5 p-10'}>
                        <img src={require('../Assets/Frame 1.png')} className={'w-16'} alt=""/>
                        <h4 style={{color: '#0069AB'}} className={'text-2xl font-medium'}>Onlayn maslahatlar</h4>
                        <p className={'text-gray-500 '}>Telefon va ujtimoiy tarmoqlar orqali turli savollar bo'yicha eng
                            yaxshi shifokorlar bilan maslahatlashing. Foydalanish uchun qulay rejalashtirish tizimimiz
                            yordamida qabulga yozilish bo’limidan o’z shikoyatingizni kiriting va sizga aloqaga
                            chiqishadi.</p>
                    </div>
                    <div
                        className={'w-full lg:w-4/12 my-10 lg:my-0 rounded-3xl outline outline-2 outline-blue-200 flex flex-col gap-5 p-10'}>
                        <img src={require('../Assets/Frame 2.png')} className={'w-16'} alt=""/>
                        <h4 style={{color: '#0069AB'}} className={'text-2xl font-medium'}>Uchrashuvlarni bron
                            qilish</h4>
                        <p className={'text-gray-500 '}> Foydalanish uchun qulay rejalashtirish tizimimiz yordamida
                            qabulga
                            yozilish
                            bo’limidan o’z shikoyatingizni kiriting va sizga aloqaga chiqishadi.</p>
                    </div>
                </div>
                <div className={'lg:flex lg:pr-52  lg:pl-48 px-5 gap-5  mt-10 pb-20'}>
                    <div
                        className={'w-full lg:w-1/3 my-10 lg:my-0 rounded-3xl outline outline-2 outline-blue-200 flex flex-col gap-5 p-10'}>
                        <img src={require('../Assets/Frame 3.png')} className={'w-16'} alt=""/>
                        <h4 style={{color: '#0069AB'}} className={'text-2xl font-medium'}>Retseptlar</h4>
                        <p className={'text-gray-500 '}> Mutaxassislarimiz bilan maslahatlashganingizdan
                            so'ng retseptlarni raqamli shaklda oling va yangilang.</p>
                    </div>
                    <div
                        className={'w-full lg:w-1/3 my-10 lg:my-0 rounded-3xl outline outline-2 outline-blue-200 flex flex-col gap-5 p-10'}>
                        <img src={require('../Assets/Frame 4.png')} className={'w-16'} alt=""/>
                        <h4 style={{color: '#0069AB'}} className={'text-2xl font-medium'}>Tibbiy eslatmalar</h4>
                        <p className={'text-gray-500 '}>Bir necha marta bosish orqali ish yoki maktab uchun kerakli
                            tibbiy
                            ma'lumotlarni oling.</p>
                    </div>
                    <div
                        className={'w-full lg:w-1/3 my-10 lg:my-0 rounded-3xl outline outline-2 outline-blue-200 flex flex-col gap-5 p-10'}>
                        <img src={require('../Assets/Frame 5.png')} className={'w-16'} alt=""/>
                        <h4 style={{color: '#0069AB'}} className={'text-2xl font-medium'}>Bemorlarning sog’ligi</h4>
                        <p className={'text-gray-500 '}>Skip the pharmacy queues and save time + energy by ordering
                            medicine
                            refills online.</p>
                    </div>
                </div>
        </div>
    );
}

export default Service;