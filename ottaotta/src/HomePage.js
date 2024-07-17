//HomePage of the website(index)
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import FilterBar from './components/FilterBar';
import ContentSection from './components/HomeContent';
import videoData from './datas/videoData';
import HeaderImage from './components/HeaderImage';

const HomePage = () => {
  const [filter, setFilter] = useState('ALL');
  const [sortOrder, setSortOrder] = useState('Hottest');
  const [videos, setVideos] = useState(videoData);

  const handleFilterChange = (filter) => {
    setFilter(filter);
  };

  const handleSortChange = (order) => {
    setSortOrder(order);
  };

  const getFilteredVideos = () => {
    let filteredVideos = videos;

    if (filter !== 'ALL') {
      filteredVideos = filteredVideos.filter(video => video.category === filter);
    }

    switch (sortOrder) {
      case 'Hottest':
        return filteredVideos.sort((a, b) => b.popularity - a.popularity);
      case 'Newest':
        return filteredVideos.sort((a, b) => new Date(b.uploadDate) - new Date(a.uploadDate));
      case 'Most viewed':
        return filteredVideos.sort((a, b) => b.views - a.views);
      default:
        return filteredVideos;
    }
  };

  return (
    <div>
      <Navbar />
      <HeaderImage />
      <FilterBar onFilterChange={handleFilterChange} onSortChange={handleSortChange} />
      <ContentSection videos={getFilteredVideos()} />
    </div>
  );
};

export default HomePage;
