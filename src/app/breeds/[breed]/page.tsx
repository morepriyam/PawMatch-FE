"use client";
import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation'; 
import { fetchPetsByBreed } from '../../../lib/breeds'; 



const BreedDetailPage = () => {
  
  const { breed } = useParams(); 
  const [pets, setPets] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBreedData = async () => {
      if (!breed) return; 

      try {
        // Fetch pets filtered by breed
        const decodedBreed = decodeURIComponent(breed as string);
        const petsByBreed = await fetchPetsByBreed(decodedBreed);
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
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-xl text-gray-500">Loading...</p>
      </div>
    );
  }

  if (!pets.length) {
    return (
      <div className="text-center py-12">
        <h2 className="text-xl text-gray-500">No pets found for breed: {breed}</h2>
      </div>
    );
  }
  const decodedBreed = decodeURIComponent(breed as string);

  return (
    <section className="container py-12 px-4 md:px-6">
      <div className="flex justify-center items-center mb-12">
        <h1 className="text-5xl font-bold text-center text-gray-800 capitalize tracking-wide">{decodedBreed}</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {pets.map((pet) => (
          <div
            key={pet.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105"
          >
            <img
              src={pet.petImage?.imageUrl}
              alt={pet.name}
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <h3 className="font-semibold text-xl text-gray-800">{pet.name}</h3>
              <p className="text-sm text-gray-600 mt-2">{pet.description}</p>
              <div className="mt-4">
                <p><strong>Age:</strong> {pet.age} years</p>
                <p><strong>Traits:</strong> {pet.traits}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BreedDetailPage;
