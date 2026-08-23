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
  deactivate: () => void;
  toggle: () => void;
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
  const deactivate = useCallback(() => setIsActivated(false), []);
  const toggle = useCallback(() => setIsActivated((prev) => !prev), []);

  return (
    <SplineActivationContext.Provider
      value={{ isActivated, activate, deactivate, toggle }}
    >
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
