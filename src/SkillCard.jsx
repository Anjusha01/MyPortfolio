import React from 'react';

function SkillCard({ icon }) {
  return (
    <div className="skill-card text-center p-3">
        <div className='icon-container'>
          <img src={icon} alt="" />
        </div>
    </div>
  );
}

export default SkillCard;
