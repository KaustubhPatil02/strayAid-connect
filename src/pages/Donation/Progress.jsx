// components/Progress.js

import React from 'react';
import '../../index.css'
const Progress = ({ current, target }) => {
  const percentage = (current / target) * 100;

  return (
    <div>
      <p style={{marginLeft:'15px'}}>Donation Progress: ${current} / ${target}</p>
      <div className="progress-bar" style={{ width: '50%', background: '#e0e0e0', height: '20px' }}>
        <div className="progress-fill"
          style={{
            width: `${percentage}%`,
            background: '#4caf50',
            height: '100%',
          }}
        />
      </div>
    </div>
  );
};

export default Progress;
