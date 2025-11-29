'use client';

import React, { ReactNode } from 'react';

interface ProvidersProps {
  children: ReactNode;
}

export const Providers: React.FC<ProvidersProps> = ({ children }) => {
  return (
    <>
      {/* Zustand + React Query Providers */}
      {children}
    </>
  );
};

export default Providers;
