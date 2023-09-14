import React from 'react';

const Header = () => {
    return (
        <header className="text-gray-400 bg-neutral-950 body-font">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
                    <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                        width="50.000000pt" height="50.000000pt" viewBox="0 0 192.000000 192.000000"
                        preserveAspectRatio="xMidYMid meet">

                        <g transform="translate(0.000000,192.000000) scale(0.100000,-0.100000)"
                            fill="#FFFFFF" stroke="none">
                            <path d="M726 1474 c-189 -46 -346 -205 -391 -396 -67 -285 122 -576 413 -637
271 -57 552 126 617 400 89 378 -261 725 -639 633z m202 -384 c130 -79 74
-280 -78 -280 -85 0 -150 65 -150 150 0 85 65 150 150 150 27 0 58 -8 78 -20z"/>
                            <path d="M1482 1148 c-18 -18 -17 -352 1 -366 20 -17 257 -9 268 9 5 8 9 89 9
181 0 155 -1 168 -19 178 -28 14 -244 13 -259 -2z"/>
                        </g>
                    </svg>
                    <span className="ml-3 text-xl">BrainVault</span>
                </a>
                <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                    <a className="mr-5 hover:text-white">About</a>
                    <a className="mr-5 hover:text-white">Documentation</a>
                </nav>
                <button className="inline-flex items-center bg-slate-50 border-0 py-1 px-3 focus:outline-none rounded text-base mt-4 md:mt-0 text-black">Download
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                </button>
            </div>
        </header>
    );
}

export default Header;