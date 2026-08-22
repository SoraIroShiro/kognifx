'use client';

import {
  createContext,
  useCallback,
  useContext,
  useState,
  type ReactNode,
} from 'react';

type SplineActivationContextValue = {
  isActivated: boolean;
  activate: () => void;
};

const SplineActivationContext =
  createContext<SplineActivationContextValue | null>(null);

export function SplineActivationProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [isActivated, setIsActivated] = useState(false);
  const activate = useCallback(() => setIsActivated(true), []);

  return (
    <SplineActivationContext.Provider value={{ isActivated, activate }}>
      {children}
    </SplineActivationContext.Provider>
  );
}

export function useSplineActivation(): SplineActivationContextValue {
  const context = useContext(SplineActivationContext);
  if (!context) {
    throw new Error(
      'useSplineActivation must be used within SplineActivationProvider'
    );
  }
  return context;
}
