// lib/breeds.ts

  export async function fetchBreeds(): Promise<string[]> {
    try {
      const response = await fetch('http://localhost:8080/api/v1/Pets');
      if (!response.ok) throw new Error('Failed to fetch breeds');
      const data = await response.json();
      console.log(data,"pet data");
      return data; 
    } catch (error) {
      console.error('Error fetching breeds:', error);
      return []; 
    }
  }
  /**
 * Get Pets filtered by breed
 * @param breed - the breed
 * @return - list of all Pets filtered by breed
 */
// lib/breeds.ts

export async function fetchPetsByBreed(breed: string): Promise<any[]> {
  try {
    const decodedBreed = decodeURIComponent(breed);
      const response = await fetch(`http://localhost:8080/api/v1/Pets/breed/${decodedBreed}`);
      if (!response.ok) throw new Error('Failed to fetch pets by breed');
      
      const data = await response.json();
      console.log(data, "pet data for breed");
      
      // Filter the pets by breed
      return data.filter((pet: any) => pet.breed.toLowerCase() === breed.toLowerCase());
  } catch (error) {
      console.error('Error fetching pets by breed:', error);
      return []; // Return an empty array in case of error
  }
}
