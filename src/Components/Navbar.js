import React, {useState} from 'react';
import {Modal} from "antd";
function Navbar(props) {
const [isOpen, setIsOpen] = useState(false);

const toggleMenu = () => {
    setIsOpen(!isOpen);
};
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return (
        <div id={'navbar'} className={'w-full h-20 py-5 flex  items-center lg:justify-around justify-between lg:px-0 px-5 fixed bg-white z-50'}>
            <img src={require('../Assets/NavLogo.png')} alt=""/>
            <ul id={'ul'}
                className={`fixed inset-0 flex flex-col items-center justify-center bg-white z-10 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 md:static md:flex-row md:gap-8 lg:gap-16 md:bg-transparent md:translate-x-0`}>
                <li><a id={'a'} className={'text-black font-medium'} href="#aboutUs">BIZ HAQIMIZDA</a></li>
                <li><a id={'a'} className={'text-black font-medium'} href="#service">XIZMATLAR</a></li>
                <li><a id={'a'} className={'text-black font-medium'} href="#info">SHIFOKORLAR</a></li>
                <li><a id={'a'} className={'text-black font-medium'} href="#contact">KONTAKTLAR</a></li>
                <button id={'background'}
                      onClick={showModal}  className={'block md:hidden py-2 px-7 rounded-lg font-medium text-white bg-blue-400'}>Bog’lanish
                </button>
            </ul>
            <button id={'background'}
                    onClick={showModal} className={'hidden md:block py-2 px-7 rounded-lg font-medium text-white bg-blue-400'}>Bog’lanish
            </button>
            <button className="text-black md:hidden  focus:outline-none" onClick={toggleMenu}>
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
            </button>
            <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <input
                    className={'py-2 my-2  w-full text-xl px-2 text-blue-700 border border-2 border-blue-200 hover:outline outline-2 outline-blue-500 rounded-xl'}
                    type="text" placeholder={'Ismingizni kiriting'}/>
                <input
                    className={'py-2 my-2 w-full text-xl px-2 text-blue-700 border border-2 border-blue-200 hover:outline outline-2 outline-blue-500 rounded-xl'}
                    type="tel" placeholder={'Telefon raqamingizni kiriting'}/>
            </Modal>
        </div>
    );
}

export default Navbar;
