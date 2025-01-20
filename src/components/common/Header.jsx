import React, { useState } from 'react';
import { CARDS } from '../../utils/helper';

const Header = () => {
    const [nav, setOff] = useState(false);
    const handleclick = () => {
        setOff(!nav);
    };
    return (
        <div className="bg-purple-700">
            <div className="container max-w-[1580px] mx-auto">
                <div className="py-4 px-3 w-full flex items-center justify-between">


                    <h2 className="cursor-pointer text-white text-2xl">logo</h2>
                    <ul className={`flex gap-4 max-md:absolute max-md:flex-col justify-center max-md:items-center max-md:w-screen transition-all ease-in-out duration-500 transit max-md:bg-black top-0 left-0  max-md:min-h-screen ${nav ? "max-md:-translate-y-0" : "max-md:-translate-y-full"}`}>
                        {CARDS.map((obj, index) => (
                            <li className=' cursor-pointer text-white' key={index}>{obj.title}</li>
                        ))
                        }
                        < li >
                            <button className='md:hidden'>
                                <p className="cursor-pointer text-white">contact-us</p>
                            </button>
                        </li>
                    </ul>
                    <button className='max-md:hidden'>
                        <p className="cursor-pointer text-white">contact-us</p>
                    </button>
                    <button onClick={handleclick} className='md:hidden relative z-50 transition-all duration-500 ease-in-out text-white'>

                        {nav ? <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="0.5" y="0.5" width="31" height="31" rx="7.5" stroke="#F3F3F3" />
                            <path d="M9.68848 28.0571C9.16797 28.0571 8.79346 28.0127 8.56494 27.9238C8.34912 27.835 8.24121 27.689 8.24121 27.4858C8.24121 27.3335 8.33008 27.1304 8.50781 26.8765L13.9922 18.9355L8.90771 11.3945C8.74268 11.1406 8.66016 10.9438 8.66016 10.8042C8.66016 10.6011 8.77441 10.4551 9.00293 10.3662C9.23145 10.2773 9.625 10.2329 10.1836 10.2329H10.5073C10.8882 10.2329 11.1929 10.271 11.4214 10.3472C11.6499 10.4106 11.834 10.5439 11.9736 10.7471L15.1919 15.5649C15.3823 15.8696 15.6108 16.2695 15.8774 16.7646C15.9282 16.6758 16.0171 16.5234 16.144 16.3076C16.271 16.0918 16.4233 15.8442 16.6011 15.5649L19.8384 10.6899C20.0415 10.3853 20.5493 10.2329 21.3618 10.2329H21.4951C22.0156 10.2329 22.3838 10.2773 22.5996 10.3662C22.8154 10.4551 22.9233 10.6011 22.9233 10.8042C22.9233 10.9565 22.8345 11.1533 22.6567 11.3945L17.5532 18.8403L23.0186 26.8765C23.209 27.1558 23.3042 27.3589 23.3042 27.4858C23.3042 27.6763 23.1836 27.8223 22.9424 27.9238C22.7012 28.0127 22.3013 28.0571 21.7427 28.0571H21.438C21.0444 28.0571 20.7334 28.0254 20.5049 27.9619C20.2891 27.8857 20.1177 27.7461 19.9907 27.543L16.3916 22.1729C16.1885 21.8682 16.0298 21.6143 15.9155 21.4111C15.8013 21.1953 15.7251 21.0557 15.687 20.9922C15.6616 21.043 15.5854 21.1763 15.4585 21.3921C15.3442 21.5952 15.1792 21.8555 14.9634 22.1729L11.3262 27.5811C11.1104 27.8984 10.6025 28.0571 9.80273 28.0571H9.68848Z" fill="white" />
                        </svg>
                            : <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="0.5" y="0.5" width="31" height="31" rx="7.5" stroke="#F3F3F3" />
                                <path d="M8 12.5088H24M8 19.4913H24" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>}
                    </button>

                </div>
            </div >
        </div >
    );
};

export default Header;


