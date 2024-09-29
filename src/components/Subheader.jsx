import React from 'react';

function Subheader({ parentPage, currentPage }) {
  return (
    <div style={{ backgroundColor: "#4A7766" }}
    className="text-white">
      <div className='container mx-auto text-center'>
        <div className='text-lg font-semibold text-white mb-2'>
          {parentPage} &gt; {currentPage}
        </div>
        <div className='text-3xl font-bold text-white'>
          {currentPage}
        </div>
      </div>
    </div>
  );
}

export default Subheader;
