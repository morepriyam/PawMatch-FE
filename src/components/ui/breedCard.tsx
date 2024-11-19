import React from 'react'
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from 'next/link'
import { PawPrint, Heart } from 'lucide-react'
import Image from "next/image"

interface BreedCardProps {
  breed: string
  imageUrl: string
  description: string
}

export default function BreedCard({ breed, imageUrl, description }: BreedCardProps) {
  return (
    <Link href={`/breed/${breed.toLowerCase()}`} passHref>
      <Card className="overflow-hidden cursor-pointer">
        <div className="relative h-48">
          <Image
            src={imageUrl}
            alt={`${breed} dog`}
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-300 ease-in-out hover:scale-105"
          />
        </div>
        <CardContent className="p-4">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-xl font-bold">{breed}</h3>
            <PawPrint className="h-5 w-5 text-primary" />
          </div>
          <p className="text-sm text-muted-foreground mb-4">{description}</p>
          <div className="flex justify-between items-center">
            <Button variant="outline" size="sm">
              Learn More
            </Button>
            <Button variant="ghost" size="icon" aria-label="Add to favorites">
              <Heart className="h-5 w-5" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
