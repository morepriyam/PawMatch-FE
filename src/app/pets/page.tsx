"use client";

import React, { useEffect, useState } from "react";
import PetCard from "@/components/ui/PetCard";

interface Pet {
	id: number;
	name: string;
	age: number;
	breed: string;
	description: string;
	traits: string;
	status: boolean;
	petImage: {
		id: number;
		imageUrl: string;
		imageData: null;
	};
}

export default function PetsPage() {
	const [pets, setPets] = useState<Pet[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const fetchPets = async () => {
			try {
				const response = await fetch("http://localhost:8080/api/v1/Pets");
				if (!response.ok) {
					throw new Error("Failed to fetch pets");
				}
				const data = await response.json();
				setPets(data);
			} catch (error) {
				console.error("Error fetching pets:", error);
				setError("Failed to load pets. Please try again later.");
			} finally {
				setLoading(false);
			}
		};

		fetchPets();
	}, []);

	return (
		<section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
			<div className="container px-4 md:px-6">
				<h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
					Available Pets
				</h1>

				{loading && <p className="text-center text-lg">Loading pets...</p>}

				{error && <p className="text-center text-lg text-red-600">{error}</p>}

				{!loading && !error && (
					<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
						{pets.length > 0 ? (
							pets.map((pet) => <PetCard key={pet.id} pet={pet} />)
						) : (
							<p className="text-center col-span-full text-lg">
								No pets available at the moment.
							</p>
						)}
					</div>
				)}
			</div>
		</section>
	);
}
