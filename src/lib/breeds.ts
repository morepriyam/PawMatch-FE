// lib/breeds.ts

  export async function fetchBreeds(): Promise<string[]> {
    try {
      const response = await fetch('http://localhost:8080/api/v1/Pets/list_breeds');
      if (!response.ok) throw new Error('Failed to fetch breeds');
      const data = await response.json();
      console.log(data,"pet data");
      return data; 
    } catch (error) {
      console.error('Error fetching breeds:', error);
      return []; // Return an empty array in case of an error
    }
  }
  /**
 * Get Pets filtered by breed
 * @param breed - the breed
 * @return - list of all Pets filtered by breed
 */
export async function fetchPetsByBreed(breed: string): Promise<any[]> {
    try {
      const response = await fetch(`http://localhost:8080/api/v1/Pets/breed/${breed}`);
      if (!response.ok) throw new Error('Failed to fetch pets by breed');
      const data = await response.json();
      console.log(data, "pet data for breed");
      return data; 
    } catch (error) {
      console.error('Error fetching pets by breed:', error);
      return []; // Return an empty array in case of error
    }
  }