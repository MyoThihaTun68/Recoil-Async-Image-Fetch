import { atom, selector } from 'recoil';

// 1. New Atom: The "Trigger" to force a refresh
export const dogImageRefreshState = atom({
  key: 'dogImageRefreshState',
  default: 0, // Starts at 0
});

// 2. Updated Selector: Now reads the trigger atom
export const randomDogImageQuery = selector({
  key: 'randomDogImageQuery',
  get: async ({ get }) => {
    get(dogImageRefreshState); // ⬅️ The Trigger
    
    const API_URL = 'https://dog.ceo/api/breeds/image/random';
   
    
    try {
      const response = await fetch(API_URL);
      if (!response.ok) {
        throw new Error('Failed to fetch dog image. Status: ' + response.status);
      }
      const data = await response.json();
      return data.message;
    } catch (error) {
      console.error("Error fetching dog image:", error);
      throw error; 
    }
  },
});