"use client";
import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation'; // Use `useParams` from `next/navigation` in the app directory
import { fetchPetsByBreed } from '../../../lib/breeds'; // Adjust import based on your project structure

const BreedDetailPage = () => {
  const { breed } = useParams(); // Get the breed from the URL parameters
  const [pets, setPets] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBreedData = async () => {
      if (!breed) return; // Don't fetch if breed is undefined

      try {
        // Fetch pets filtered by breed
        const petsByBreed = await fetchPetsByBreed(breed as string);
        setPets(petsByBreed || []);
      } catch (error) {
        console.error('Error fetching breed data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBreedData();
  }, [breed]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!pets.length) {
    return <p>No pets found for breed: {breed}</p>;
  }

  return (
    <section className="container py-12">
      <h1 className="text-4xl font-bold">{breed}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {pets.map((pet) => (
          <div key={pet.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img src={pet.petImage?.imageUrl} alt={pet.name} className="w-full h-56 object-cover" />
            <div className="p-4">
              <h3 className="font-bold text-xl">{pet.name}</h3>
              <p>{pet.description}</p>
              <p><strong>Age:</strong> {pet.age} years</p>
              <p><strong>Traits:</strong> {pet.traits}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BreedDetailPage;
