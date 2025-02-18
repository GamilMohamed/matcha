"use client";

import { TransitionRouter } from "next-transition-router";
import { AuthProvider } from "./contexts/AuthContext";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <TransitionRouter
      leave={(next) => {
        next();
      }}
      enter={(next) => {
        next();
      }}
    >
      <AuthProvider>
        {children}
      </AuthProvider>
    </TransitionRouter>
  );
}