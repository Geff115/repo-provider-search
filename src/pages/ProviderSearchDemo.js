import React from 'react';
import ProviderSearch from '../components/ProviderSearch';
import './ProviderSearchDemo.css';

const ProviderSearchDemo = () => {
  return (
    <div className="provider-search-demo">
      <div className="demo-showcase">
        <h1>Provider Search Component</h1>
        <p>This component allows users to search for healthcare providers.</p>
        
        <div className="component-info">
          <h3>Component Details:</h3>
          <ul>
            <li><strong>Repository:</strong> repo-provider-search</li>
            <li><strong>Type:</strong> Interactive Search Component</li>
            <li><strong>Features:</strong> Real-time filtering, results display, responsive design</li>
          </ul>
        </div>
        
        <div className="usage-instructions">
          <h3>How to Use:</h3>
          <ol>
            <li>Enter a search term (name, specialty, or location)</li>
            <li>Click "Search" or press Enter</li>
            <li>View matching results below</li>
          </ol>
          <p><em>Try searching for: "Smith", "Cardiology", or "New York"</em></p>
        </div>
        
        <div className="component-display">
          <h3>Component Preview:</h3>
          <ProviderSearch />
        </div>
      </div>
    </div>
  );
};

export default ProviderSearchDemo;