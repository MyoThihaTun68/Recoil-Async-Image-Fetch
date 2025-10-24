import React from 'react';
import { useSetRecoilState } from 'recoil';
import { dogImageRefreshState } from '../recoil/dogState';

function DogImageButton() {
  // Use the write-only hook to update the trigger
  const setRefresh = useSetRecoilState(dogImageRefreshState);

  const handleClick = () => {
    // Incrementing the atom's value forces the dependent selector to re-run
    setRefresh(count => count + 1);
  };

  return (
    <button 
      onClick={handleClick} 
      style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer', margin: '15px' }}
    >
      Fetch Another Dog!
    </button>
  );
}

export default DogImageButton;