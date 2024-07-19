// src/components/FilterBar.js
import React from 'react';

function FilterBar({ onFilterChange, onSortChange }) {
  return (
    <section id="Filters">
      <div className="container-xxl mt-2 border-bottom border-2 border-dark border-top bg-light p-3">
        <div className="d-flex align-items-center">
          <p className="fw-bold mb-0 me-3 fs-4">Filters:</p>
          <div>
            <button onClick={() => onFilterChange('ALL')} className="btn btn-outline-primary active">ALL</button>
            <button onClick={() => onFilterChange('Gaming')} className="btn btn-outline-primary">Gaming</button>
            <button onClick={() => onFilterChange('UI-Design')} className="btn btn-outline-primary">UI-Design</button>
            <button onClick={() => onFilterChange('Github')} className="btn btn-outline-primary">Github</button>
            <button onClick={() => onFilterChange('NEWS')} className="btn btn-outline-primary">NEWS</button>
            <button onClick={() => onFilterChange('Sci-fiction')} className="btn btn-outline-primary">Sci-fiction</button>
            <button onClick={() => onFilterChange('More')} className="btn btn-outline-dark">More Filters</button>
          </div>
        </div>
        <div className="d-flex align-items-center mt-3">
          <p className="fw-bold mb-0 me-3 fs-5">Order by:</p>
          <div className="btn-group btn-group-sm" role="group" aria-label="Basic radio toggle button group">
            <input type="radio" className="btn-check" name="btnradio" id="btnradio1" autoComplete="off" defaultChecked onClick={() => onSortChange('Hottest')} />
            <label className="btn btn-outline-primary" htmlFor="btnradio1">Hottest</label>
            
            <input type="radio" className="btn-check" name="btnradio" id="btnradio2" autoComplete="off" onClick={() => onSortChange('Newest')} />
            <label className="btn btn-outline-primary" htmlFor="btnradio2">Newest</label>
            
            <input type="radio" className="btn-check" name="btnradio" id="btnradio3" autoComplete="off" onClick={() => onSortChange('Most viewed')} />
            <label className="btn btn-outline-primary" htmlFor="btnradio3">Most viewed</label>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FilterBar;
