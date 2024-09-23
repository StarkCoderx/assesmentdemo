import React from 'react'

const SearchResultPagination = ({currentPage, totalPages, onPageChange}) => {

  return (
    <div className='flex justify-end items-center space-x-4 '>
      <button><img src="https://storagereponeevaydevcdn.blob.core.windows.net/business/dropdown_arrow.svg" alt="v"
        className=' rotate-90'  /></button>
      <button className='border bg-black text-white border-black px-3 py-1'>1</button>
      <button className='border border-black px-3 py-1'>2</button>
      <button className='border border-black px-2 py-1'>...</button>
      <button className='border border-black px-2 py-1'>10</button>
      <button><img src="https://storagereponeevaydevcdn.blob.core.windows.net/business/dropdown_arrow.svg" alt="v"
       style={{ transform: 'rotate(270deg)' }}/></button>
    </div>
  );
};

   

export default SearchResultPagination
