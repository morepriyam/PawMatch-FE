// app/pets/[breed].tsx

"use client";
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { fetchPetsByBreed } from '../../lib/breeds'; // Function to fetch pets by breed
import PetCard from '../../components/ui/PetCard'; 

export default function PetsByBreedPage() {
  const router = useRouter();
  const { breed } = router.query; 
  const [pets, setPets] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (breed) {
      const fetchPets = async () => {
        try {
          const petsList = await fetchPetsByBreed(breed as string);
          setPets(petsList || []);
        } catch (error) {
          console.error('Error fetching pets:', error);
        } finally {
          setLoading(false);
        }
      };

      fetchPets();
    }
  }, [breed]);

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
          Pets of Breed: {breed}
        </h2>

        {loading ? (
          <p className="text-center">Loading...</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {Array.isArray(pets) && pets.length > 0 ? (
              pets.map((pet) => (
                <PetCard key={pet.id} pet={pet} /> 
              ))
            ) : (
              <p className="text-center col-span-full">No pets available for this breed.</p>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
