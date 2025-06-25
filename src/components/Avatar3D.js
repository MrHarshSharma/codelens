import React, { useState } from 'react';
import './Avatar3D.css';

const Avatar3D = ({ 
  type = 'designer', 
  size = 'medium', 
  animated = true,
  interactive = true,
  className = '',
  ...props 
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const avatarTypes = {
    designer: {
      icon: '🎨',
      gradient: 'var(--gradient-sunset)',
      label: 'Creative Designer',
      skills: ['UI/UX', 'Branding', 'Visual Identity']
    },
    strategist: {
      icon: '💎',
      gradient: 'var(--gradient-ocean)',
      label: 'Brand Strategist',
      skills: ['Strategy', 'Research', 'Planning']
    },
    developer: {
      icon: '🚀',
      gradient: 'var(--gradient-forest)',
      label: 'Tech Innovator',
      skills: ['Development', 'Innovation', 'Solutions']
    },
    manager: {
      icon: '⭐',
      gradient: 'var(--gradient-fire)',
      label: 'Project Manager',
      skills: ['Leadership', 'Coordination', 'Delivery']
    },
    analyst: {
      icon: '📊',
      gradient: 'var(--gradient-cool)',
      label: 'Data Analyst',
      skills: ['Analytics', 'Insights', 'Optimization']
    },
    marketer: {
      icon: '🎯',
      gradient: 'var(--gradient-warm)',
      label: 'Marketing Expert',
      skills: ['Campaigns', 'Growth', 'Engagement']
    }
  };

  const sizeClasses = {
    small: 'avatar-3d--small',
    medium: 'avatar-3d--medium',
    large: 'avatar-3d--large',
    xl: 'avatar-3d--xl'
  };

  const avatar = avatarTypes[type] || avatarTypes.designer;

  return (
    <div 
      className={`avatar-3d ${sizeClasses[size]} ${animated ? 'avatar-3d--animated' : ''} ${className}`}
      onMouseEnter={() => interactive && setIsHovered(true)}
      onMouseLeave={() => interactive && setIsHovered(false)}
      style={{ '--avatar-gradient': avatar.gradient }}
      {...props}
    >
      <div className="avatar-3d__container">
        <div className="avatar-3d__sphere">
          <div className="avatar-3d__icon">
            {avatar.icon}
          </div>
          <div className="avatar-3d__glow"></div>
          <div className="avatar-3d__ring ring-1"></div>
          <div className="avatar-3d__ring ring-2"></div>
          <div className="avatar-3d__ring ring-3"></div>
        </div>
        
        {isHovered && interactive && (
          <div className="avatar-3d__tooltip">
            <h4>{avatar.label}</h4>
            <div className="avatar-3d__skills">
              {avatar.skills.map((skill, index) => (
                <span key={index} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>
        )}
      </div>
      
      <div className="avatar-3d__particles">
        {[...Array(6)].map((_, i) => (
          <div key={i} className={`particle particle-${i + 1}`}></div>
        ))}
      </div>
    </div>
  );
};

export default Avatar3D; 