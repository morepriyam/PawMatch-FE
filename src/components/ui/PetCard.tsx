import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

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

interface PetCardProps {
	pet: Pet;
}

export default function PetCard({ pet }: PetCardProps) {
	const traits = pet.traits.split(";");

	return (
		<Card className="overflow-hidden">
			<div className="relative h-48">
				<Image
					src={pet.petImage.imageUrl}
					alt={`${pet.name} the ${pet.breed}`}
					layout="fill"
					objectFit="cover"
				/>
			</div>
			<CardHeader>
				<CardTitle className="flex justify-between items-center">
					<span>{pet.name}</span>
					<Badge variant={pet.status ? "default" : "secondary"}>
						{pet.status ? "Available" : "Adopted"}
					</Badge>
				</CardTitle>
			</CardHeader>
			<CardContent>
				<p className="text-sm text-gray-500 mb-2">
					{pet.breed} • {pet.age} years old
				</p>
				<p className="text-sm mb-4">{pet.description}</p>
				<div className="flex flex-wrap gap-2">
					{traits.map((trait, index) => (
						<Badge key={index} variant="outline">
							{trait}
						</Badge>
					))}
				</div>
			</CardContent>
		</Card>
	);
}
