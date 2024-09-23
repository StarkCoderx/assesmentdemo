import React, { useEffect, useState } from 'react';
import SearchResultSearchbar from './SearchResultSearchbar';
const SearchResultNavbar = () => {
    
    return (
        <>
            <div className='bg-cover fixed top-0 w-full max-w-[1280px] bg-white z-20'>
                <div className='flex justify-between items-center shadow-md h-[102px] md:h-[91px] bg-white px-6 md:px-10 lg:px-8'>
                    <ul className='flex justify-between items-center lg:space-x-6 xl:space-x-10'>
                        <li>
                            <img src="https://storagereponeevaydevcdn.blob.core.windows.net/business/homepage_4_neevayLogo.svg" alt="Neevay" className=' w-[112px] h-[34px] md:h-[39px] md:w-full' />
                        </li>
                    </ul>
                    <div className='lg:block hidden'>
                    <SearchResultSearchbar/>
                    </div>
                    <div className='flex justify-around md:justify-between items-center xs:py-2 md:py-0'>
                            <>
                                <button  className=' h-[43px] px-6 md:h-[44px] md:px-0 md:w-[108px] xs:text-sm md:text-base mx-4 border hover:font-bold border-black'>Login</button>
                                <button className='flex items-center justify-around md:text-sm xs:text-sm  md:h-[44px] md:w-[135px] w-[100px] h-[43px] hover:font-bold text-white bg-gradient-to-r from-[#24242D] to-[#0B0B1A] border-l-4 border-[#F16500]'>
                                    Signup
                                    {/* <img src="https://storagereponeevaydevcdn.blob.core.windows.net/business/homepage_4_Line_standing.svg" alt="|" className='xs:h-4 md:h-5 md:block' />
                                    <img src="https://storagereponeevaydevcdn.blob.core.windows.net/business/homepage_4_Vector.svg" alt="v" className='xs:w-4 md:w-2.5 md:h-2 md:block' /> */}
                                </button>
                            </>
                        
                    </div>
                </div>
            </div>
        </>
    );
};
export default SearchResultNavbar;