import React, { useState } from 'react';

const index = ({onStateChange}) => {
  const [filter, setFilter] = useState('html');

  const handleFilterChange = (target) => {
    setFilter(target);
    onStateChange(target)
  };

  return (
    <div className="flex space-x-6 content-center justify-center mb-10">
      <p
        className={`px-3 py-1 rounded-xl cursor-pointer  tracking-wider border-[#4e4feb] ${filter === "html" ? 'border-[4px]':''}`}
        onClick={() => handleFilterChange('html')}
      >
        HTML
      </p>
      <p
        className={`px-3 py-1 rounded-xl cursor-pointer tracking-wider border-[#4e4feb] ${filter === "css" ? 'border-[4px]':''}`}
        onClick={() => handleFilterChange('css')}
      >
        CSS
      </p>
      <p
        className={`px-3 py-1 rounded-xl cursor-pointer tracking-wider border-[#4e4feb] ${filter === "js" ? 'border-[4px]':''}`}
        onClick={() => handleFilterChange('js')}
      >
        Javascript
      </p>
      <p
        className={`px-3 py-1 rounded-xl cursor-pointer tracking-wider border-[#4e4feb] ${filter === "react" ? 'border-[4px]':''}`}
        onClick={() => handleFilterChange('react')}
      >
        ReactJS
      </p>
    </div>
  );
};

export default index;
