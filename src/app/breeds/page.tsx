// app/breeds/page.tsx

"use client";
import React, { useEffect, useState } from 'react';
import { fetchBreeds } from '../../lib/breeds';
import dynamic from 'next/dynamic';

// Dynamically import BreedCard only on the client side
const BreedCard = dynamic(() => import("../../components/ui/breedCard"), { ssr: false });

export default function BreedsPage() {
  const [breeds, setBreeds] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBreedsData = async () => {
      try {
        const breedsList = await fetchBreeds();
        setBreeds(breedsList || []);
      } catch (error) {
        console.error('Error fetching breeds:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBreedsData();
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
            {Array.isArray(breeds) && breeds.length > 0 ? (
              breeds.map((breed) => (
                <BreedCard
                  key={breed}
                  breed={breed}
                  imageUrl={''} 
                  description={''} 
                />
              ))
            ) : (
              <p className="text-center col-span-full">No breeds available.</p>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
