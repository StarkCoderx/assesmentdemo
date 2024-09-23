import React from 'react'

const SearchResultFooter = () => {
  return (
    <div>
       <div className='hidden md:block bg-gradient-to-r from-[#0B0B1A] to-[#24242D] md:px-[63px] lg:px-[83px] xl:px-[104px] xs:pb-12 md:py-10 '>
        <div className='max-w-[1280px] mx-auto'>
          <div className='md:flex md:justify-between'>
            <div className='md:w-1/2'>
              <img src="https://storagereponeevaydevcdn.blob.core.windows.net/business/neevay.svg" alt="" className=' md:w-[128px] md:h-[39px] w-[102px] h-[21px] md:ml-0 xs:ml-4 ' />
              <p className='text-white text-sm md:py-6 md:w-[332px]'>Neevay aims to revolutionize the construction industry by enhancing the lives of its workers, fostering technological innovation, and building a global community. Our platform connects all project stakeholders, providing unlimited support and a construction-focused business model.</p>
              <div className='flex space-x-4 pb-8 pt-2'>
                <a href="https://www.instagram.com/neevay_official/" target="blank">
                  <img src="https://storagereponeevaydevcdn.blob.core.windows.net/business/homepage_4_instagram.svg" alt="instagram logo" className='w-[18px] h-[18px]' />
                </a>
                <a href="https://www.linkedin.com/company/neevay/mycompany/" target="blank">
                  <img src="https://storagereponeevaydevcdn.blob.core.windows.net/business/homepage_4_linkedin.svg" alt="linkedin logo" className='w-[18px] h-[18px]' />
                </a>
                <a href="https://www.youtube.com/channel/UC3dTz8WCJBJXHKWmewBlvfw/about" target="blank">
                  <img src="https://storagereponeevaydevcdn.blob.core.windows.net/business/homepage_4_youtube.svg" alt="YouTube logo" className='w-[25px] h-[18px]' />
                </a>
                <a href="https://twitter.com/neevayofficial?lang=en" target="blank">
                  <img src="https://storagereponeevaydevcdn.blob.core.windows.net/business/homepage_4_twitter.svg" alt="twitter logo" className='w-[20px] h-[18px]' />
                </a>
              </div>
            </div>

            <div className='flex justify-between w-1/3 pt-2'>
              <div className='text-white text-[14px] md:space-y-2 '>
                <p className='text-xl font-bold pb-4 '>Company</p>
                <div className='flex flex-col items-start md:space-y-2'>
                  <button >About Us</button>
                </div>
              </div>
              <div className='text-white text-[14px] md:space-y-2 md:ml-8 lg:ml-0'>
                <p className='text-xl font-bold pb-4'>Solutions</p>
                <p>For Construction Companies</p>
                <p>For Vendors</p>
              </div>
            </div>
          </div>
          <div className='flex justify-between items-center md:w-[600px] 2xl:w-[800px] md:pt-4'>
            <p className="text-sm md:text-sm text-white flex items-center">
              <span className='md:text-xl pr-1 md:pr-2 '>&copy; </span>
              2024 Tathaatvam Technologies Pvt Ltd
            </p>

            <div className='flex items-center'>
              <p  className='flex items-center text-sm cursor-pointer text-white'>
                Privacy Notice
              </p>
              <div className='mx-6 w-[1px] h-5  bg-white'></div>
              <p  className='text-white text-sm cursor-pointer'>
                Terms of Service
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SearchResultFooter
