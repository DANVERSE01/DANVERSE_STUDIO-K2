'use client';

import { createContext, useContext } from 'react';
import { Perf } from 'r3f-perf';

/**
 * Global R3F helpers and utilities
 * Inspired by pmndrs ecosystem
 */

// Export R3F components for use
export const r3f = {
  Perf,
};

// View context for managing active view
const ViewContext = createContext<any>(null);

export const ViewProvider = ViewContext.Provider;
export const useView = () => useContext(ViewContext);