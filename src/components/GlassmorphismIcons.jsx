import React from 'react';

// Glassmorphism Icon Components
export const HomeIcon = ({ size = 24, color = 'currentColor', className = '' }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg" 
    className={className}
    style={{
      filter: 'drop-shadow(0 2px 4px rgba(255, 255, 255, 0.3))',
      transition: 'all 0.3s ease'
    }}
  >
    <path 
      d="M3 10.5L12 4L21 10.5V19C21 19.5523 20.5523 20 20 20H4C3.44772 20 3 19.5523 3 19V10.5Z" 
      stroke={color} 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
    <path 
      d="M9 20V14H15V20" 
      stroke={color} 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
  </svg>
);

export const ProjectsIcon = ({ size = 24, color = 'currentColor', className = '' }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg" 
    className={className}
    style={{
      filter: 'drop-shadow(0 2px 4px rgba(255, 255, 255, 0.3))',
      transition: 'all 0.3s ease'
    }}
  >
    <rect 
      x="3" 
      y="3" 
      width="18" 
      height="18" 
      rx="2" 
      ry="2" 
      stroke={color} 
      strokeWidth="2"
    />
    <circle 
      cx="9" 
      cy="9" 
      r="2" 
      stroke={color} 
      strokeWidth="2"
    />
    <path 
      d="M21 15.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-3.5" 
      stroke={color} 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
  </svg>
);

export const ContactIcon = ({ size = 24, color = 'currentColor', className = '' }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg" 
    className={className}
    style={{
      filter: 'drop-shadow(0 2px 4px rgba(255, 255, 255, 0.3))',
      transition: 'all 0.3s ease'
    }}
  >
    <path 
      d="M22 16.92V19a2 2 0 0 1-2.18 2A19.72 19.72 0 0 1 3 5.18 2 2 0 0 1 5 3h2.09a2 2 0 0 1 2 1.72c.13 1.05.37 2.07.72 3.06a2 2 0 0 1-.45 2.11l-.27.27a16 16 0 0 0 6.29 6.29l.27-.27a2 2 0 0 1 2.11-.45c.99.35 2.01.59 3.06.72A2 2 0 0 1 22 16.92z" 
      stroke={color} 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
  </svg>
);

export const DownloadIcon = ({ size = 24, color = 'currentColor', className = '' }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg" 
    className={className}
    style={{ 
      filter: 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.1))',
      background: 'rgba(255, 255, 255, 0.1)',
      borderRadius: '8px',
      padding: '4px',
      backdropFilter: 'blur(10px)',
      border: '1px solid rgba(255, 255, 255, 0.2)'
    }}
  >
    <path 
      d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" 
      stroke={color} 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
    <polyline 
      points="7,10 12,15 17,10" 
      stroke={color} 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
    <line 
      x1="12" 
      y1="15" 
      x2="12" 
      y2="3" 
      stroke={color} 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
  </svg>
);

export const GraduationCapIcon = ({ size = 64, color = '#00aaff', className = '' }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg" 
    className={className}
    style={{ 
      filter: 'drop-shadow(0 8px 16px rgba(0, 170, 255, 0.3))',
      background: 'rgba(0, 170, 255, 0.1)',
      borderRadius: '16px',
      padding: '8px',
      backdropFilter: 'blur(15px)',
      border: '2px solid rgba(0, 170, 255, 0.3)'
    }}
  >
    <path 
      d="M22 10v6M2 10l10-5 10 5-10 5z" 
      stroke={color} 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
      fill="rgba(0, 170, 255, 0.1)"
    />
    <path 
      d="M6 12v5c3 3 9 3 12 0v-5" 
      stroke={color} 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
  </svg>
);

export const ProjectIcon = ({ size = 64, color = '#a259ff', className = '' }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg" 
    className={className}
    style={{ 
      filter: 'drop-shadow(0 8px 16px rgba(162, 89, 255, 0.3))',
      background: 'rgba(162, 89, 255, 0.1)',
      borderRadius: '16px',
      padding: '8px',
      backdropFilter: 'blur(15px)',
      border: '2px solid rgba(162, 89, 255, 0.3)'
    }}
  >
    <rect 
      x="3" 
      y="3" 
      width="18" 
      height="18" 
      rx="2" 
      ry="2" 
      stroke={color} 
      strokeWidth="2"
      fill="rgba(162, 89, 255, 0.1)"
    />
    <circle 
      cx="9" 
      cy="9" 
      r="2" 
      stroke={color} 
      strokeWidth="2"
      fill="rgba(162, 89, 255, 0.1)"
    />
    <path 
      d="M21 15.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-3.5" 
      stroke={color} 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
  </svg>
);

export const RobotIcon = ({ size = 64, color = '#ffb300', className = '' }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg" 
    className={className}
    style={{ 
      filter: 'drop-shadow(0 8px 16px rgba(255, 179, 0, 0.3))',
      background: 'rgba(255, 179, 0, 0.1)',
      borderRadius: '16px',
      padding: '8px',
      backdropFilter: 'blur(15px)',
      border: '2px solid rgba(255, 179, 0, 0.3)'
    }}
  >
    <rect 
      x="3" 
      y="11" 
      width="18" 
      height="11" 
      rx="2" 
      ry="2" 
      stroke={color} 
      strokeWidth="2"
      fill="rgba(255, 179, 0, 0.1)"
    />
    <circle 
      cx="12" 
      cy="5" 
      r="2" 
      stroke={color} 
      strokeWidth="2"
      fill="rgba(255, 179, 0, 0.1)"
    />
    <path 
      d="M12 7v4" 
      stroke={color} 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
    <line 
      x1="8" 
      y1="16" 
      x2="8" 
      y2="16" 
      stroke={color} 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
    <line 
      x1="16" 
      y1="16" 
      x2="16" 
      y2="16" 
      stroke={color} 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
  </svg>
);

export const CubesIcon = ({ size = 64, color = '#00c896', className = '' }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg" 
    className={className}
    style={{ 
      filter: 'drop-shadow(0 8px 16px rgba(0, 200, 150, 0.3))',
      background: 'rgba(0, 200, 150, 0.1)',
      borderRadius: '16px',
      padding: '8px',
      backdropFilter: 'blur(15px)',
      border: '2px solid rgba(0, 200, 150, 0.3)'
    }}
  >
    <rect 
      x="3" 
      y="3" 
      width="7" 
      height="7" 
      stroke={color} 
      strokeWidth="2"
      fill="rgba(0, 200, 150, 0.1)"
    />
    <rect 
      x="14" 
      y="3" 
      width="7" 
      height="7" 
      stroke={color} 
      strokeWidth="2"
      fill="rgba(0, 200, 150, 0.1)"
    />
    <rect 
      x="14" 
      y="14" 
      width="7" 
      height="7" 
      stroke={color} 
      strokeWidth="2"
      fill="rgba(0, 200, 150, 0.1)"
    />
    <rect 
      x="3" 
      y="14" 
      width="7" 
      height="7" 
      stroke={color} 
      strokeWidth="2"
      fill="rgba(0, 200, 150, 0.1)"
    />
  </svg>
);

export const GlobeIcon = ({ size = 64, color = '#ff4c60', className = '' }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg" 
    className={className}
    style={{ 
      filter: 'drop-shadow(0 8px 16px rgba(255, 76, 96, 0.3))',
      background: 'rgba(255, 76, 96, 0.1)',
      borderRadius: '16px',
      padding: '8px',
      backdropFilter: 'blur(15px)',
      border: '2px solid rgba(255, 76, 96, 0.3)'
    }}
  >
    <circle 
      cx="12" 
      cy="12" 
      r="10" 
      stroke={color} 
      strokeWidth="2"
      fill="rgba(255, 76, 96, 0.1)"
    />
    <line 
      x1="2" 
      y1="12" 
      x2="22" 
      y2="12" 
      stroke={color} 
      strokeWidth="2"
    />
    <path 
      d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" 
      stroke={color} 
      strokeWidth="2"
    />
  </svg>
);

export const LinkedInIcon = ({ size = 24, color = 'currentColor', className = '' }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg" 
    className={className}
    style={{ 
      filter: 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.1))',
      background: 'rgba(255, 255, 255, 0.1)',
      borderRadius: '8px',
      padding: '4px',
      backdropFilter: 'blur(10px)',
      border: '1px solid rgba(255, 255, 255, 0.2)'
    }}
  >
    <path 
      d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" 
      stroke={color} 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
      fill="rgba(255, 255, 255, 0.1)"
    />
    <rect 
      x="2" 
      y="9" 
      width="4" 
      height="12" 
      stroke={color} 
      strokeWidth="2"
      fill="rgba(255, 255, 255, 0.1)"
    />
    <circle 
      cx="4" 
      cy="4" 
      r="2" 
      stroke={color} 
      strokeWidth="2"
      fill="rgba(255, 255, 255, 0.1)"
    />
  </svg>
);

export const GitHubIcon = ({ size = 24, color = 'currentColor', className = '' }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg" 
    className={className}
    style={{ 
      filter: 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.1))',
      background: 'rgba(255, 255, 255, 0.1)',
      borderRadius: '8px',
      padding: '4px',
      backdropFilter: 'blur(10px)',
      border: '1px solid rgba(255, 255, 255, 0.2)'
    }}
  >
    <path 
      d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" 
      stroke={color} 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
      fill="rgba(255, 255, 255, 0.1)"
    />
  </svg>
);

export const LeetCodeIcon = ({ size = 24, color = 'currentColor', className = '' }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg" 
    className={className}
    style={{ 
      filter: 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.1))',
      background: 'rgba(255, 255, 255, 0.1)',
      borderRadius: '8px',
      padding: '4px',
      backdropFilter: 'blur(10px)',
      border: '1px solid rgba(255, 255, 255, 0.2)'
    }}
  >
    <path 
      d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l2.396 2.392c.54.54 1.414.54 1.955.003.54-.54.54-1.414.003-1.955l-2.396-2.392A5.83 5.83 0 0 0 13.483 0zm-2.866 12.815a1.941 1.941 0 0 0-1.94 1.939 1.941 1.941 0 0 0 1.94 1.939 1.941 1.941 0 0 0 1.939-1.939 1.941 1.941 0 0 0-1.939-1.939z" 
      stroke={color} 
      strokeWidth="1.5" 
      strokeLinecap="round" 
      strokeLinejoin="round"
      fill="rgba(255, 255, 255, 0.1)"
    />
  </svg>
);

export const MenuIcon = ({ size = 24, color = 'currentColor', className = '' }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg" 
    className={className}
    style={{ 
      filter: 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.1))',
      background: 'rgba(255, 255, 255, 0.1)',
      borderRadius: '8px',
      padding: '4px',
      backdropFilter: 'blur(10px)',
      border: '1px solid rgba(255, 255, 255, 0.2)'
    }}
  >
    <line 
      x1="3" 
      y1="6" 
      x2="21" 
      y2="6" 
      stroke={color} 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
    <line 
      x1="3" 
      y1="12" 
      x2="21" 
      y2="12" 
      stroke={color} 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
    <line 
      x1="3" 
      y1="18" 
      x2="21" 
      y2="18" 
      stroke={color} 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
  </svg>
);

export const CloseIcon = ({ size = 24, color = 'currentColor', className = '' }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg" 
    className={className}
    style={{ 
      filter: 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.1))',
      background: 'rgba(255, 255, 255, 0.1)',
      borderRadius: '8px',
      padding: '4px',
      backdropFilter: 'blur(10px)',
      border: '1px solid rgba(255, 255, 255, 0.2)'
    }}
  >
    <line 
      x1="18" 
      y1="6" 
      x2="6" 
      y2="18" 
      stroke={color} 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
    <line 
      x1="6" 
      y1="6" 
      x2="18" 
      y2="18" 
      stroke={color} 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
  </svg>
);
