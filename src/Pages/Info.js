import React from 'react';

function Info(props) {
    return (
        <div id={'aboutUs'} className={'w-full h-screen lg:px-32 px-5'}>
            <div className={' rounded-3xl outline outline-2 out outline outline-2 outline-blue-200 p-5 mt-10'}>
                <h1 className={'text-5xl font-bold text-center'}><span id={'color'} className={'text-5xl font-bold'}>SAFO MED </span> Haqida
                </h1>
                <div className={'lg:flex p-10'}>
                    <div className={'lg:w-1/2 w-full'}>
                        <img className={'lg:mt-10'} src={require('../Assets/Doctor2.png')} alt=""/>
                    </div>
                    <div className={'lg:w-1/2 w-full'}>
                        <p className={'mt-5'}>SAFO MED- bu shunchaki onlayn tibbiy xizmatdan ko'proq; bu hamma uchun qulay,
                            samarali va mehrli sog'liqni saqlashga qaratilgan harakat. Vizyonli shifokorlar,
                            sog'liqni saqlash sohasi mutaxassislari va texnologiya mutaxassislari jamoasi tomonidan
                            asos solingan, biz qayerda bo'lishingizdan qat'i nazar, sizga to'g'ridan-to'g'ri
                            favqulodda tibbiy yordam ko'rsatish missiyasiga asoslanganmiz. <br/><br/><br/>
                            Bizning platformamiz ishonch, innovatsiya va bemorga yo'naltirilganlik ustunlariga
                            qurilgan bo'lib, har bir o'zaro aloqa shaxsiylashtirilganligini va har bir davolash
                            rejasi sizning noyob ehtiyojlaringizga moslashtirilganligini ta'minlaydi. </p>
                        <button style={{backgroundColor: '#00A4F4'}}
                                className={'text-xl mt-8 lg:w-40 w-full rounded-xl text-white font-medium py-3 px-8'}>Bog’lanish
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Info;