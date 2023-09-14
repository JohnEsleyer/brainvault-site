import React from 'react';

const Footer = () => {
    return (
        <footer className="text-gray-400 bg-neutral-950 body-font">
            <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
                <a className="flex title-font font-medium items-center md:justify-start justify-center text-white">
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
                <p className="text-sm text-gray-400 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-800 sm:py-2 sm:mt-0 mt-4">© 2023 BrainVault —
                    <a href="https://twitter.com/johnesleyer" className="text-gray-500 ml-1" target="_blank" rel="noopener noreferrer">@johnesleyer</a>
                </p>
          
            </div>
        </footer>
    );
}

export default Footer;