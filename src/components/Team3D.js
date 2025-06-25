import React from 'react';
import Avatar3D from './Avatar3D';
import './Team3D.css';

const Team3D = () => {
  const teamMembers = [
    {
      type: 'designer',
      name: 'Sarah Chen',
      role: 'Creative Director',
      description: 'Leading brand identities that inspire and captivate audiences worldwide'
    },
    {
      type: 'strategist',
      name: 'Michael Rodriguez',
      role: 'Strategy Lead',
      description: 'Crafting data-driven strategies that transform businesses and drive growth'
    },
    {
      type: 'developer',
      name: 'Alex Thompson',
      role: 'Technical Director',
      description: 'Building innovative digital experiences with cutting-edge technology'
    },
    {
      type: 'manager',
      name: 'Emma Williams',
      role: 'Client Success Manager',
      description: 'Ensuring exceptional project delivery and client satisfaction'
    }
  ];

  return (
    <div className="team-3d">
      <div className="team-3d__header">
        <h3>Meet Our Experts</h3>
        <p>The passionate professionals who bring your brand vision to life</p>
      </div>
      
      <div className="team-3d__grid">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-3d__member" style={{ '--delay': `${index * 0.15}s` }}>
            <div className="team-3d__avatar">
              <Avatar3D 
                type={member.type}
                size="large"
                animated={true}
                interactive={true}
              />
            </div>
            <div className="team-3d__info">
              <h4 className="member-name">{member.name}</h4>
              <h5 className="member-role">{member.role}</h5>
              <p className="member-description">{member.description}</p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="team-3d__stats">
        <div className="stat-item">
          <div className="stat-number">50+</div>
          <div className="stat-label">Projects Delivered</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">98%</div>
          <div className="stat-label">Client Satisfaction</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">24/7</div>
          <div className="stat-label">Support Available</div>
        </div>
      </div>
    </div>
  );
};

export default Team3D; 