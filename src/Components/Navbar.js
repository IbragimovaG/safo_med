import React, { useState } from 'react';
import { Button, Form, Input, Modal } from 'antd';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);
    const [form] = Form.useForm();

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const toggleModal = () => {
        setModalVisible(prev => !prev);
    };

    const onFinish = () => {
        form.resetFields();
        toggleModal();
    };

    return (
        <div id="navbar" className="w-full h-20 py-5 flex items-center lg:justify-around xl:justify-around justify-between xl:px-10 lg:px-10 px-10 fixed bg-white z-40">
            <a className=' active:scale-75 transition' href="home"><img src={require('../Assets/NavLogo.png')} alt="" /></a>
            <ul id="ul" className={`fixed inset-0 flex flex-col items-center justify-center gap-2 bg-white w-[50%] z-50 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 md:static md:flex-row md:gap-8 lg:gap-16 md:bg-transparent md:translate-x-0`}>
                <li><a id="a" className="text-black font-medium" href="#aboutUs">BIZ HAQIMIZDA</a></li>
                <li><a id="a" className="text-black font-medium" href="#service">XIZMATLAR</a></li>
                <li><a id="a" className="text-black font-medium" href="#info">SHIFOKORLAR</a></li>
                <li><a id="a" className="text-black font-medium" href="#contact">KONTAKTLAR</a></li>
                <button id="background" onClick={toggleModal} className="block md:hidden py-2 px-7 rounded-lg font-medium text-white bg-blue-400">Bog’lanish</button>
                <button className="absolute top-5 right-5 text-black md:hidden focus:outline-none" onClick={toggleMenu}>
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                </button>
            </ul>
            <button id="background" onClick={toggleModal} className="hidden md:block py-2 px-7 rounded-lg font-medium text-white bg-blue-400">Bog’lanish</button>
            <button className="text-black md:hidden focus:outline-none" onClick={toggleMenu}>
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                </svg>
            </button>
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
        </div>
    );
}

export default Navbar;
