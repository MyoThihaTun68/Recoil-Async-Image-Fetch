import React from 'react';
import { useRecoilValue } from 'recoil';
import { randomDogImageQuery } from '../recoil/dogState'; // ⬅️ The Selector

function DogImageDisplay() {
  // Reading the selector value triggers the API fetch.
  // If the data is not ready, this component will suspend (pause rendering).
  const imageUrl = useRecoilValue(randomDogImageQuery); 

  return (
    <div style={{ textAlign: 'center' }}>
      <h3>Random Dog!</h3>
      {/* 4. Display the image using the URL returned by the selector */}
      <img 
        src={imageUrl} 
        alt="A random dog" 
        style={{ width: '300px', height: '300px', objectFit: 'cover', borderRadius: '8px' }}
      />
    </div>
  );
}

export default DogImageDisplay;