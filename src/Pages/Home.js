import React, { useState } from 'react';
import { RightOutlined, StarFilled } from "@ant-design/icons";
import { Button, Form, Input, Modal } from 'antd';
import vector1 from '../Assets/Vector 1.svg'
function Home(props) {
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
        <div>
            <Modal
                title="Murojaat qilish"
                visible={modalVisible}
                onCancel={toggleModal}
                footer={null}
                destroyOnClose
            >
                <Form form={form} onFinish={onFinish}>
                    <Form.Item
                        name="name"
                        rules={[{ required: true, message: 'Imingizni kiriting!' }]}
                    >
                        <Input placeholder="Ismingizni kiriting" />
                    </Form.Item>
                    <Form.Item
                        name="email"
                        rules={[{ required: true, message: 'Email kiriting!' }]}
                    >
                        <Input placeholder="Email kiriting" />
                    </Form.Item>
                    <Form.Item
                        name="message"
                        rules={[{ required: true, message: 'Xabaringizni qoldiring!' }]}
                    >
                        <Input.TextArea placeholder="Xabar qoldiring" rows={4} />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" className='w-full'>
                            Yuborish
                        </Button>
                    </Form.Item>
                </Form>
            </Modal>
            <div id={'home'} className={'lg:flex xl:flex lg:px-28 xl:px-32  px-5  w-full h-auto'}>
                <div className={'lg:w-6/12 w-full lg:pt-20 text-center lg:text-start'}>
                    <h1 data-aos="fade-down" className={'font-bold text-5xl lg:pt-20 pt-40'}>
                        <span id={'color'} className={'font-bold text-5xl'}>SAFO MED </span>Angredagi
                        Zamonaviy <span id={'color'} className={'font-bold text-5xl'}>LOR</span> Markazi
                    </h1>
                    <p data-aos="fade-down" style={{ fontSize: '17px' }} className={'py-10'}>
                        <span style={{ color: '#0084D4' }}> SAFO MED</span> Klinikasi <span
                            style={{ color: '#0084D4' }}>LOR</span> a’zolari kasalliklari bo’yicha barcha turdagi xizmlatlar
                        ko’rsatish sharoitiga ega.
                    </p>
                    <button
                        data-aos="fade-right"
                        id="background"
                        className="lg:mt-20 px-8 py-3 text-white rounded-lg font-medium text-xl"
                        onClick={toggleModal}
                    >
                        Murojaat qilish <RightOutlined className="text-white" />
                    </button>

                    <p className={'text-gray-400 font-medium mt-10'}>Ijtimoiy tarmoqlardan bizni kuzatib boring</p>
                    <div data-aos="fade-right" className={'flex gap-5 mt-3  px-10 lg:px-0'}>
                        <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g opacity="0.7">
                                <path
                                    d="M23.407 43.7365H23.3174C12.1145 43.7365 3 34.6193 3 23.413V23.3234C3 12.1172 12.1145 3 23.3174 3H23.407C34.61 3 43.7245 12.1172 43.7245 23.3234V23.413C43.7245 34.6193 34.61 43.7365 23.407 43.7365ZM23.3174 4.37889C12.8741 4.37889 4.37848 12.877 4.37848 23.3234V23.413C4.37848 33.8595 12.8741 42.3576 23.3174 42.3576H23.407C33.8504 42.3576 42.346 33.8595 42.346 23.413V23.3234C42.346 12.877 33.8504 4.37889 23.407 4.37889H23.3174Z"
                                    fill="#1877F2" />
                                <path
                                    d="M26.102 18.8007V23.0877H31.4036L30.5641 28.8625H26.102V42.1673C25.2073 42.2914 24.292 42.3563 23.3629 42.3563C22.2905 42.3563 21.2373 42.2708 20.2117 42.1053V28.8625H15.3222V23.0877H20.2117V17.8424C20.2117 14.5882 22.8487 11.949 26.1033 11.949V11.9518C26.113 11.9518 26.1213 11.949 26.1309 11.949H31.405V16.9434H27.9588C26.9346 16.9434 26.1033 17.7748 26.1033 18.7993L26.102 18.8007Z"
                                    fill="#1877F2" />
                            </g>
                        </svg>
                        <svg width="45" height="44" viewBox="0 0 45 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g opacity="0.7">
                                <path
                                    d="M22.407 42.7365H22.3174C11.1145 42.7365 2 33.6193 2 22.413V22.3234C2 11.1172 11.1145 2 22.3174 2H22.407C33.61 2 42.7245 11.1172 42.7245 22.3234V22.413C42.7245 33.6193 33.61 42.7365 22.407 42.7365ZM22.3174 3.37889C11.8741 3.37889 3.37848 11.877 3.37848 22.3234V22.413C3.37848 32.8595 11.8741 41.3576 22.3174 41.3576H22.407C32.8504 41.3576 41.346 32.8595 41.346 22.413V22.3234C41.346 11.877 32.8504 3.37889 22.407 3.37889H22.3174Z"
                                    fill="url(#paint0_linear_76_463)" />
                                <path
                                    d="M28.4503 10.6967H16.2756C12.9121 10.6967 10.1758 13.4337 10.1758 16.7982V27.9397C10.1758 31.3041 12.9121 34.0412 16.2756 34.0412H28.4503C31.8138 34.0412 34.5501 31.3041 34.5501 27.9397V16.7982C34.5501 13.4337 31.8138 10.6967 28.4503 10.6967ZM12.3276 16.7982C12.3276 14.621 14.099 12.8491 16.2756 12.8491H28.4503C30.627 12.8491 32.3983 14.621 32.3983 16.7982V27.9397C32.3983 30.1169 30.627 31.8888 28.4503 31.8888H16.2756C14.099 31.8888 12.3276 30.1169 12.3276 27.9397V16.7982Z"
                                    fill="url(#paint1_linear_76_463)" />
                                <path
                                    d="M22.363 28.0431C25.4908 28.0431 28.0369 25.4977 28.0369 22.3676C28.0369 19.2375 25.4922 16.6921 22.363 16.6921C19.2339 16.6921 16.6892 19.2375 16.6892 22.3676C16.6892 25.4977 19.2339 28.0431 22.363 28.0431ZM22.363 18.8459C24.3053 18.8459 25.8851 20.4261 25.8851 22.369C25.8851 24.3118 24.3053 25.892 22.363 25.892C20.4208 25.892 18.841 24.3118 18.841 22.369C18.841 20.4261 20.4208 18.8459 22.363 18.8459Z"
                                    fill="url(#paint2_linear_76_463)" />
                                <path
                                    d="M28.562 17.609C29.4043 17.609 30.0908 16.9237 30.0908 16.0798C30.0908 15.236 29.4057 14.5507 28.562 14.5507C27.7184 14.5507 27.0333 15.236 27.0333 16.0798C27.0333 16.9237 27.7184 17.609 28.562 17.609Z"
                                    fill="url(#paint3_linear_76_463)" />
                            </g>
                            <defs>
                                <linearGradient id="paint0_linear_76_463" x1="7.9578" y1="36.7769" x2="36.7752"
                                    y2="7.96803"
                                    gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#FAAD4F" />
                                    <stop offset="0.35" stop-color="#DD2A7B" />
                                    <stop offset="0.62" stop-color="#9537B0" />
                                    <stop offset="1" stop-color="#515BD4" />
                                </linearGradient>
                                <linearGradient id="paint1_linear_76_463" x1="12.2228" y1="32.5107" x2="32.5077"
                                    y2="12.2332" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#FAAD4F" />
                                    <stop offset="0.35" stop-color="#DD2A7B" />
                                    <stop offset="0.62" stop-color="#9537B0" />
                                    <stop offset="1" stop-color="#515BD4" />
                                </linearGradient>
                                <linearGradient id="paint2_linear_76_463" x1="18.353" y1="26.3802" x2="26.374"
                                    y2="18.3601"
                                    gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#FAAD4F" />
                                    <stop offset="0.35" stop-color="#DD2A7B" />
                                    <stop offset="0.62" stop-color="#9537B0" />
                                    <stop offset="1" stop-color="#515BD4" />
                                </linearGradient>
                                <linearGradient id="paint3_linear_76_463" x1="27.4813" y1="17.1609" x2="29.6434"
                                    y2="14.9994" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#FAAD4F" />
                                    <stop offset="0.35" stop-color="#DD2A7B" />
                                    <stop offset="0.62" stop-color="#9537B0" />
                                    <stop offset="1" stop-color="#515BD4" />
                                </linearGradient>
                            </defs>
                        </svg>
                        <svg width="45" height="44" viewBox="0 0 45 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g opacity="0.8">
                                <path
                                    d="M23.4071 42.7365H23.3174C12.1145 42.7365 3 33.6193 3 22.413V22.3234C3 11.1172 12.1145 2 23.3174 2H23.4071C34.61 2 43.7245 11.1172 43.7245 22.3234V22.413C43.7245 33.6193 34.61 42.7365 23.4071 42.7365ZM23.3174 3.37889C12.8741 3.37889 4.37848 11.877 4.37848 22.3234V22.413C4.37848 32.8595 12.8741 41.3576 23.3174 41.3576H23.4071C33.8504 41.3576 42.346 32.8595 42.346 22.413V22.3234C42.346 11.877 33.8504 3.37889 23.4071 3.37889H23.3174Z"
                                    fill="#00B0F2" />
                                <path
                                    d="M11.1413 21.6974C11.1965 21.6698 11.2516 21.6436 11.3054 21.6188C12.24 21.1858 13.187 20.7804 14.1327 20.3751C14.1837 20.3751 14.2691 20.3158 14.3174 20.2964C14.3904 20.2647 14.4635 20.2344 14.5366 20.2027C14.6772 20.142 14.8178 20.0827 14.957 20.0221C15.2382 19.9021 15.518 19.7821 15.7992 19.6622C16.3603 19.4222 16.9213 19.1823 17.4823 18.941C18.6044 18.4612 19.7279 17.9799 20.85 17.5001C21.9721 17.0202 23.0955 16.539 24.2176 16.0591C25.3397 15.5793 26.4632 15.0981 27.5852 14.6182C28.7073 14.1383 29.8308 13.6571 30.9529 13.1773C31.2024 13.0697 31.4726 12.9098 31.74 12.8629C31.9647 12.8229 32.1839 12.7457 32.4099 12.7029C32.8386 12.6216 33.3115 12.5885 33.7222 12.7663C33.8642 12.8284 33.9952 12.9153 34.1041 13.0242C34.6252 13.5399 34.5521 14.3865 34.4418 15.1118C33.674 20.1668 32.9062 25.2232 32.137 30.2782C32.0322 30.9718 31.8889 31.7329 31.3416 32.1714C30.8784 32.5424 30.2195 32.5837 29.6474 32.4265C29.0754 32.268 28.5709 31.9356 28.076 31.6089C26.0234 30.2493 23.9695 28.8897 21.9169 27.5301C21.429 27.2074 20.8859 26.7855 20.8914 26.1995C20.8941 25.8465 21.105 25.5321 21.3201 25.2522C23.1038 22.9246 25.6774 21.3251 27.5921 19.1051C27.8623 18.7921 28.0746 18.2267 27.7038 18.0461C27.4833 17.9386 27.2296 18.0847 27.0283 18.224C24.4974 19.9821 21.968 21.7415 19.4371 23.4996C18.6114 24.0732 17.7457 24.6634 16.7504 24.804C15.8599 24.9309 14.9639 24.6827 14.1023 24.429C13.38 24.2166 12.659 23.9988 11.9409 23.774C11.559 23.6554 11.1648 23.5272 10.8698 23.2583C10.5748 22.9894 10.4053 22.5371 10.5831 22.1786C10.6947 21.9539 10.9112 21.8119 11.1386 21.696L11.1413 21.6974Z"
                                    fill="#00B0F2" />
                            </g>
                        </svg>
                        <svg width="45" height="44" viewBox="0 0 45 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g opacity="0.7">
                                <path
                                    d="M22.3064 42.6248C11.109 42.6248 2 33.5131 2 22.3124C2 11.1117 11.109 2 22.3064 2C33.5038 2 42.6128 11.1117 42.6128 22.3124C42.6128 33.5131 33.5038 42.6248 22.3064 42.6248ZM22.3064 3.37889C11.8699 3.37889 3.37848 11.8728 3.37848 22.3124C3.37848 32.7519 11.8699 41.2459 22.3064 41.2459C32.7429 41.2459 41.2343 32.7519 41.2343 22.3124C41.2343 11.8728 32.7429 3.37889 22.3064 3.37889Z"
                                    fill="#FF0209" />
                                <path
                                    d="M34.659 18.246C34.5046 16.7555 34.1724 15.1077 32.9497 14.2417C32.0027 13.5702 30.7579 13.5454 29.5959 13.5468C27.1394 13.5482 24.6816 13.5509 22.2251 13.5523C19.8624 13.5551 17.4997 13.5564 15.137 13.5592C14.15 13.5606 13.1906 13.4834 12.2739 13.9108C11.4867 14.2776 10.8706 14.9753 10.4998 15.7516C9.98558 16.8313 9.87807 18.0544 9.81604 19.2485C9.70162 21.423 9.71403 23.603 9.8505 25.7761C9.95113 27.3619 10.2061 29.1144 11.4316 30.1252C12.5179 31.0201 14.0507 31.0642 15.4595 31.0656C19.9313 31.0697 24.4045 31.0738 28.8777 31.0766C29.4511 31.078 30.0494 31.0669 30.6339 31.0035C31.7835 30.8794 32.8794 30.5499 33.6183 29.6977C34.364 28.8387 34.5557 27.6432 34.6687 26.5111C34.9444 23.7643 34.9416 20.9914 34.659 18.246ZM19.6391 26.1622V18.4611L26.3055 22.311L19.6391 26.1622Z"
                                    fill="#FF0209" />
                            </g>
                        </svg>
                        <svg width="45" height="44" viewBox="0 0 45 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g opacity="0.7">
                                <path
                                    d="M33.3376 18.4363V22.1525C32.6883 22.089 31.8447 21.9415 30.9115 21.5995C29.6929 21.1528 28.7858 20.5419 28.1917 20.0689V27.5798L28.1766 27.5563C28.1862 27.7052 28.1917 27.8569 28.1917 28.01C28.1917 31.7399 25.1577 34.7762 21.4275 34.7762C17.6973 34.7762 14.6633 31.7399 14.6633 28.01C14.6633 24.2801 17.6973 21.2424 21.4275 21.2424C21.7928 21.2424 22.1512 21.2713 22.5014 21.3279V24.9902C22.165 24.8702 21.8038 24.8054 21.4275 24.8054C19.6617 24.8054 18.2239 26.2422 18.2239 28.01C18.2239 29.7777 19.6617 31.2145 21.4275 31.2145C23.1933 31.2145 24.6311 29.7763 24.6311 28.01C24.6311 27.9438 24.6297 27.8776 24.6256 27.8114V13.2159H28.3378C28.3516 13.5303 28.364 13.8474 28.3778 14.1618C28.4026 14.7809 28.6232 15.3752 29.0078 15.862C29.4585 16.4342 30.1243 17.0988 31.059 17.6297C31.9343 18.1247 32.7559 18.3384 33.3376 18.4391V18.4363Z"
                                    fill="#FF004F" />
                                <path
                                    d="M32.0612 15.4194V19.1341C31.412 19.0707 30.5683 18.9231 29.6351 18.5812C28.4165 18.1344 27.5095 17.5236 26.9153 17.0506V24.5614L26.9002 24.5379C26.9098 24.6869 26.9153 24.8385 26.9153 24.9916C26.9153 28.7215 23.8813 31.7578 20.1511 31.7578C16.421 31.7578 13.3869 28.7215 13.3869 24.9916C13.3869 21.2617 16.421 18.224 20.1511 18.224C20.5164 18.224 20.8748 18.253 21.225 18.3095V21.9718C20.8886 21.8519 20.5275 21.7871 20.1511 21.7871C18.3853 21.7871 16.9475 23.2239 16.9475 24.9916C16.9475 26.7593 18.3853 28.1961 20.1511 28.1961C21.917 28.1961 23.3547 26.758 23.3547 24.9916C23.3547 24.9254 23.3533 24.8592 23.3492 24.793V10.1975H27.0615C27.0752 10.5119 27.0877 10.829 27.1014 11.1434C27.1263 11.7625 27.3468 12.3569 27.7314 12.8436C28.1822 13.4158 28.848 14.0805 29.7826 14.6113C30.6579 15.1064 31.4795 15.3201 32.0612 15.4207V15.4194Z"
                                    fill="#00F7EF" />
                                <path
                                    d="M32.8731 17.0437V20.7598C32.2238 20.6964 31.3802 20.5488 30.447 20.2069C29.2284 19.7601 28.3213 19.1493 27.7272 18.6763V26.1871L27.7121 26.1637C27.7217 26.3126 27.7272 26.4643 27.7272 26.6173C27.7272 30.3472 24.6932 33.3835 20.963 33.3835C17.2328 33.3835 14.1988 30.3472 14.1988 26.6173C14.1988 22.8874 17.2328 19.8497 20.963 19.8497C21.3283 19.8497 21.6867 19.8787 22.0368 19.9352V23.5976C21.7005 23.4776 21.3393 23.4128 20.963 23.4128C19.1972 23.4128 17.7594 24.8496 17.7594 26.6173C17.7594 28.3851 19.1972 29.8219 20.963 29.8219C22.7288 29.8219 24.1666 28.3837 24.1666 26.6173C24.1666 26.5511 24.1652 26.485 24.1611 26.4188V11.8232H27.8733C27.8871 12.1376 27.8995 12.4548 27.9133 12.7692C27.9381 13.3883 28.1587 13.9826 28.5433 14.4693C28.994 15.0416 29.6598 15.7062 30.5945 16.2371C31.4698 16.7321 32.2914 16.9458 32.8731 17.0465V17.0437Z"
                                    fill="black" />
                                <path
                                    d="M23.4071 42.7365H23.3174C12.1145 42.7365 3 33.6193 3 22.413V22.3234C3 11.1172 12.1145 2 23.3174 2H23.4071C34.61 2 43.7245 11.1172 43.7245 22.3234V22.413C43.7245 33.6193 34.61 42.7365 23.4071 42.7365ZM23.3174 3.37889C12.8741 3.37889 4.37848 11.877 4.37848 22.3234V22.413C4.37848 32.8595 12.8741 41.3576 23.3174 41.3576H23.4071C33.8504 41.3576 42.346 32.8595 42.346 22.413V22.3234C42.346 11.877 33.8504 3.37889 23.4071 3.37889H23.3174Z"
                                    fill="black" />
                            </g>
                        </svg>
                    </div>
                </div>
                <div className={'w-6/12 pt-20 relative hidden lg:block'}>
                    <img data-aos='fade-left' className={'absolute bottom-16 right-0'} src={require('../Assets/Doctor.png')} alt="" />
                    <div data-aos='fade-right'
                        className={'z-30 absolute bottom-32 left-10 bg-white py-2 px-4 rounded-lg shadow-lg font-medium'}
                        style={{ color: '#0069AB' }}><StarFilled className={'mx-2'} /> Navbatda turishlarsiz ko’rikdan
                        o’ting
                    </div>
                    <div data-aos='fade-right'
                        className={'w-64 absolute bg-white bottom-52 z-30 -right-10 rounded-lg  border-2 p-5 border-blue-200'}>
                        <img height={'200'} className={' '} src={require('../Assets/card2.png')} alt="" />
                    </div>
                    <img className={'absolute bottom-14 right-60 z-40'} src={require('../Assets/vector3.png')} alt="" />
                    <div data-aos='fade-down'
                        className={'z-30  border-2 border-blue-300 absolute -bottom-10 right-0 p-8 text-gray-500 bg-white rounded-lg shadow-lg font-medium'}>
                        <p>
                            Bir necha marta bosish orqali kerakli <br /> tibbiy ma'lumotlarni oling.</p></div>
                </div>
            </div>
            <div>
                <img className={'z-20'} id={'svg'} src={vector1} alt="" />
            </div>
        </div>
    );
}

export default Home;