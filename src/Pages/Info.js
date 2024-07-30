import { Button, Form, Input, Modal } from 'antd';
import React, { useState } from 'react';

function Info(props) {
    const [modalVisible, setModalVisible] = useState(false);
    const [form] = Form.useForm();

    const toggleModal = () => {
        setModalVisible(prev => !prev);
    };

    const onFinish = () => {
        form.resetFields();
        toggleModal();
    };


    return (
        <div id={'aboutUs'} className={'w-full h-auto xl:px-32 lg:px-28 px-5 py-32'}>
             <Modal
                title="Doctor bilan bog'lanish uchun ma'lumotingizni kiriting"
                visible={modalVisible}
                onCancel={toggleModal}
                footer={null}
            >
                <Form form={form} onFinish={onFinish}>
                    <Form.Item
                        name="name"
                        rules={[{ required: true, message: 'Ismingizni kiriting' }]}
                    >
                        <Input
                            className="py-2 mt-4 w-full text-xl px-2 text-blue-700 border-2 border-blue-200 hover:outline outline-2 outline-blue-500 rounded-xl"
                            placeholder="Ismingizni kiriting"
                        />
                    </Form.Item>
                    <Form.Item
                        name="phone"
                        rules={[{ required: true, message: 'Telefon raqamingizni kiriting' }]}
                    >
                        <Input
                            className="py-2 w-full text-xl px-2 text-blue-700 border-2 border-blue-200 hover:outline outline-2 outline-blue-500 rounded-xl"
                            type="tel"
                            placeholder="Telefon raqamingizni kiriting"
                        />
                    </Form.Item>
                    <Form.Item>
                        <Button htmlType="submit" type="primary" className="w-full py-5">Yuborish</Button>
                    </Form.Item>
                </Form>
            </Modal>
            <div className={' rounded-3xl  outline  outline-2 outline-blue-200 p-5 mt-10'}>
                <h1 className={'text-5xl font-bold text-center'}><span id={'color'} className={'text-5xl font-bold'}>SAFO MED </span> Haqida
                </h1>
                <div className={'lg:flex p-10'}>
                    <div className={'w-full'}>
                        <img data-aos='fade-right' className={'lg:mt-10'} src={require('../Assets/Doctor2.png')} alt=""/>
                    </div>
                    <div data-aos='fade-left' className={'w-full'}>
                        <p className={'mt-5'}>SAFO MED- bu shunchaki onlayn tibbiy xizmatdan ko'proq; bu hamma uchun qulay,
                            samarali va mehrli sog'liqni saqlashga qaratilgan harakat. Vizyonli shifokorlar,
                            sog'liqni saqlash sohasi mutaxassislari va texnologiya mutaxassislari jamoasi tomonidan
                            asos solingan, biz qayerda bo'lishingizdan qat'i nazar, sizga to'g'ridan-to'g'ri
                            favqulodda tibbiy yordam ko'rsatish missiyasiga asoslanganmiz. <br/><br/><br/>
                            Bizning platformamiz ishonch, innovatsiya va bemorga yo'naltirilganlik ustunlariga
                            qurilgan bo'lib, har bir o'zaro aloqa shaxsiylashtirilganligini va har bir davolash
                            rejasi sizning noyob ehtiyojlaringizga moslashtirilganligini ta'minlaydi. </p>
                        <button style={{backgroundColor: '#00A4F4'}}
                                className={'text-xl mt-8 lg:w-40 w-full rounded-xl text-white font-medium py-3 px-8'} onClick={toggleModal}>Bog’lanish
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Info;