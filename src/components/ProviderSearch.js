import React, { useState } from 'react';
import './ProviderSearch.css';

const ProviderSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  // Dummy data for providers
  const dummyProviders = [
    { id: 1, name: 'Dr. John Smith', specialty: 'Cardiology', location: 'New York' },
    { id: 2, name: 'Dr. Sarah Johnson', specialty: 'Pediatrics', location: 'Boston' },
    { id: 3, name: 'Dr. Michael Lee', specialty: 'Orthopedics', location: 'Chicago' },
    { id: 4, name: 'Dr. Emily Wilson', specialty: 'Dermatology', location: 'Los Angeles' },
    { id: 5, name: 'Dr. Robert Brown', specialty: 'Neurology', location: 'Miami' },
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    // Simple search functionality
    const results = dummyProviders.filter(
      (provider) =>
        provider.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        provider.specialty.toLowerCase().includes(searchTerm.toLowerCase()) ||
        provider.location.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  };

  return (
    <div className="provider-search">
      <h2>Provider Search</h2>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search by name, specialty, or location"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      <div className="search-results">
        {searchResults.length > 0 ? (
          <div>
            <h3>Search Results</h3>
            <ul>
              {searchResults.map((provider) => (
                <li key={provider.id}>
                  <h4>{provider.name}</h4>
                  <p>Specialty: {provider.specialty}</p>
                  <p>Location: {provider.location}</p>
                </li>
              ))}
            </ul>
          </div>
        ) : searchTerm ? (
          <p>No providers found matching your search criteria.</p>
        ) : null}
      </div>
    </div>
  );
};

export default ProviderSearch;