"use client";
import React, { useEffect, useState } from 'react';
import { fetchBreeds } from '../../lib/breeds';
import dynamic from 'next/dynamic';

// Dynamically import BreedCard only on the client side
const BreedCard = dynamic(() => import("../../components/ui/breedCard"), { ssr: false });

export default function BreedsPage() {
  const [pets, setPets] = useState<any[]>([]); // Update state to hold pet objects, not just breed names
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPetsData = async () => {
      try {
        const petsList = await fetchBreeds();
        setPets(petsList || []);
      } catch (error) {
        console.error('Error fetching pets:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPetsData();
  }, []);

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
          Popular Dog Breeds
        </h2>
        
        {loading ? (
          <p className="text-center">Loading...</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {Array.isArray(pets) && pets.length > 0 ? (
              pets.map((pet) => (
                <BreedCard
                  key={pet.id}
                  breed={pet.breed}
                  imageUrl={pet.petImage?.imageUrl || ''}  // Use the pet's image URL
                  description={pet.description || ''}    // Use the pet's description
                />
              ))
            ) : (
              <p className="text-center col-span-full">No pets available.</p>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
