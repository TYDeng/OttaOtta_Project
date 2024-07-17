// src/components/ContentSection.js
import React from 'react';
import VideoCard from './VideoCard';

function ContentSection({ videos }) {
  // Ensure we only display 3 rows of 4 videos each
  const displayedVideos = videos.slice(0, 12);
  const rows = [];
  for (let i = 0; i < displayedVideos.length; i += 4) {
    rows.push(displayedVideos.slice(i, i + 4));
  }

  return (
    <section id="Contents">
      <div className="container-xxxl mt-2">
        {rows.map((row, rowIndex) => (
          <div className="row mb-3" key={rowIndex}>
            {row.map((video, index) => (
              <div className="col-md-3" key={index}>
                <VideoCard video={video} />
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}

export default ContentSection;
