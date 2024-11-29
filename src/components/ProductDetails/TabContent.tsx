import React from 'react';

interface TabContentProps {
  isActive: boolean;
  children: React.ReactNode;
}

export const TabContent: React.FC<TabContentProps> = ({ isActive, children }) => (
  <div className={`tab-content ${isActive ? 'active' : ''}`}>
    {children}
  </div>
);