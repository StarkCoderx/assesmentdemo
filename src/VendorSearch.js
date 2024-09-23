import React, { useState } from 'react';
import vendors from './vendors';

const VendorSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredVendors = vendors.filter((vendor) =>
    vendor.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search for a vendor..."
        value={searchTerm}
        onChange={handleSearch}
      />
      {searchTerm && (
        <div>
          <h2>Search Results:</h2>
          <ul>
            {filteredVendors.map((vendor) => (
              <li key={vendor.id}>{vendor.name}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default VendorSearch;