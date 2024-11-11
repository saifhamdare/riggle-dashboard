import React from 'react'

const ProgressBar = ({ progress,color }) => {
    return (
      <div className='col-span-7' style={{maxWidth:"250px", width: '100%', backgroundColor: '', borderRadius: '8px' }}>
        <div
          style={{
            height: '10px',
            width: `${Math.min(progress, 100)}%`,
            backgroundColor: color,
            borderRadius: '8px',
            transition: 'width 0.2s ease-out',
          }}
        />
      </div>
    );
  };
export default ProgressBar