import SearchResultBadges from './SearchResultsComponents/SearchResultBadges';
import SearchResultCards from './SearchResultsComponents/SearchResultCards';
import SearchResultFilters from './SearchResultsComponents/SearchResultFilters';
import SearchResultFooter from './SearchResultsComponents/SearchResultFooter';
import SearchResultNavbar from './SearchResultsComponents/SearchResultNavbar';
import SearchResultPagination from './SearchResultsComponents/SearchResultPagination';
import SearchResults from './SearchResultsComponents/SearchResults';
import SearchResultSearchbar from './SearchResultsComponents/SearchResultSearchbar';
import SearchResultText from './SearchResultsComponents/SearchResultText';

// Then use them in your component
function App() {
    return (
        <div>
            <SearchResultNavbar />
            <SearchResultSearchbar />
            <SearchResultFilters />
            <SearchResults />
            <SearchResultCards />
            <SearchResultText />
            <SearchResultBadges />
            <SearchResultPagination />
            <SearchResultFooter />
        </div>
    );
}

export default App;
