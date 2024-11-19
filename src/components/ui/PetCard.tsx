// components/ui/PetCard.tsx
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

interface PetCardProps {
  pet: any; 
}

const PetCard: React.FC<PetCardProps> = ({ pet }) => {
  return (
    <Card className="overflow-hidden">
      <div className="relative h-48">
        <Image
          src={pet.imageUrl}
          alt={`${pet.name}`}
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-300 ease-in-out hover:scale-105"
        />
      </div>
      <CardContent className="p-4">
        <h3 className="text-xl font-bold">{pet.name}</h3>
        <p className="text-sm text-muted-foreground">{pet.description}</p>
      </CardContent>
    </Card>
  );
};

export default PetCard;
