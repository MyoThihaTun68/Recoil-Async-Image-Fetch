// src/App.jsx

import React, { Suspense } from 'react';
import DogImageDisplay from './components/DogImageDisplay';
import DogImageButton from './components/DogImageButton'; 

function App() {
  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif', textAlign: 'center' }}>
      <h1>Recoil Async Image Fetch Example</h1>
      
      {/* NO RecoilRoot here */}
      <DogImageButton /> 
      
      <Suspense fallback={<div>Fetching dog photo... 🐕</div>}>
        <DogImageDisplay />
      </Suspense>
    </div>
  );
}

export default App;