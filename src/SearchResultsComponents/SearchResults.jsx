import React, { useState } from 'react';
import SearchResultNavbar from './SearchResultNavbar';
import SearchResultCards from './SearchResultCards';
import SearchResultFilters from './SearchResultFilters';
import SearchResultText from './SearchResultText';
import SearchResultPagination from './SearchResultPagination';
import SearchResultFooter from './SearchResultFooter';

const SearchResults = () => {
    const [filtersClicked, setFiltersClicked] = useState(true);

    const handleFilters = () => {
        setFiltersClicked(!filtersClicked);
    }
    return (

        <div
            className='max-w-[1280px] mx-auto flex flex-col justify-center hide-scrollbar'
            style={{ overflowY: 'scroll', msOverflowStyle: 'none', scrollbarWidth: 'none' }}
        >
            {/* Inject global styles for scrollbar hiding */}
            <style>
                {`
          .hide-scrollbar {
            -ms-overflow-style: none; /* Internet Explorer 10+ */
            scrollbar-width: none; /* Firefox */
          }
          .hide-scrollbar::-webkit-scrollbar {
            display: none; /* Safari and Chrome */
          }
        `}
            </style>
            <SearchResultNavbar />
            <SearchResultText />
            <div className='flex justify-between bg-gray-100'>
                <div className=' my-8 h-screen overflow-y-auto hide-scrollbar'>
                    <SearchResultFilters />
                </div>
                <div className='mt-8 h-screen overflow-y-auto hide-scrollbar'>
                    <SearchResultCards />
                </div>
            </div>
            <div className='bg-gray-100 pb-8 pr-8'>
            <SearchResultPagination/>
            </div>
            <SearchResultFooter/>
        </div>
    );
}

export default SearchResults;
