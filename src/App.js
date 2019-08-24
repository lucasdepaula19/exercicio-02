import React from 'react';
import { ApplicationRoutes } from './ApplicationRouters';
import { FirstHeader } from './components/ComponentHeader';


export function App() {
  return (
    <div>
      <FirstHeader />
      <ApplicationRoutes />
    </div>
  );
}