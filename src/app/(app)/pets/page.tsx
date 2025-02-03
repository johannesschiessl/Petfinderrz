"use client";

import { useState } from "react";
import { pets } from "@/data/pets";
import { ads } from "@/data/ads";
import { SwipeCard } from "@/components/swipe-card";
import { AdCard } from "@/components/ad-card";
import { SavedPetsDrawer } from "@/components/saved-pets-drawer";
import { BuyBonesDialog } from "@/components/buy-bones-dialog";
import { Button } from "@/components/ui/button";
import { Bone, Menu } from "lucide-react";

export default function Home() {
  const [currentPetIndex, setCurrentPetIndex] = useState(0);
  const [savedPets, setSavedPets] = useState<typeof pets>([]);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isBonesDialogOpen, setIsBonesDialogOpen] = useState(false);
  const [currentAdIndex, setCurrentAdIndex] = useState(0);
  const [showingAd, setShowingAd] = useState(false);

  const handleSwipe = (direction: "left" | "right") => {
    if (direction === "right") {
      setSavedPets([...savedPets, pets[currentPetIndex]]);
    }

    if (
      (currentPetIndex + 1) % 10 === 0 &&
      currentPetIndex !== pets.length - 1
    ) {
      setShowingAd(true);
    } else {
      setCurrentPetIndex((prevIndex) => (prevIndex + 1) % pets.length);
    }
  };

  const handleAdComplete = () => {
    setShowingAd(false);
    setCurrentPetIndex((prevIndex) => (prevIndex + 1) % pets.length);
    setCurrentAdIndex((prevIndex) => (prevIndex + 1) % ads.length);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <header className="px-6 py-4 flex justify-between items-center border-b-2">
        <h1 className="text-2xl md:text-3xl font-bold text-green-700">
          Petfinderrz
        </h1>
        <Button
          variant="outline"
          size="icon"
          onClick={() => setIsDrawerOpen(true)}
          className="md:hidden rounded-full border-2 text-neutral-500 hover:bg-neutral-100"
        >
          <Menu className="h-6 w-6" />
        </Button>
        <div className="hidden md:flex items-center space-x-4">
          <Button
            variant="outline"
            onClick={() => setIsDrawerOpen(true)}
            className="rounded-full border-2 text-neutral-500 hover:bg-neutral-100"
          >
            Saved Pets ({savedPets.length})
          </Button>
          <Button
            className="rounded-full bg-neutral-900 hover:bg-neutral-800"
            onClick={() => setIsBonesDialogOpen(true)}
          >
            <Bone className="mr-2 h-5 w-5" /> Buy Bones
          </Button>
        </div>
      </header>
      <main className="flex-1 flex flex-col items-center justify-center p-6">
        {showingAd ? (
          <AdCard ad={ads[currentAdIndex]} onComplete={handleAdComplete} />
        ) : (
          currentPetIndex < pets.length && (
            <SwipeCard pet={pets[currentPetIndex]} onSwipe={handleSwipe} />
          )
        )}
        <div className="mt-8 flex flex-col md:hidden space-y-4 w-full max-w-[320px]">
          <Button
            variant="outline"
            onClick={() => setIsDrawerOpen(true)}
            className="w-full rounded-full border-2 text-neutral-500 hover:bg-neutral-100"
          >
            Saved Pets ({savedPets.length})
          </Button>
          <Button
            className="w-full rounded-full bg-neutral-900 hover:bg-neutral-800"
            onClick={() => setIsBonesDialogOpen(true)}
          >
            <Bone className="mr-2 h-5 w-5" /> Buy Bones
          </Button>
        </div>
      </main>
      <SavedPetsDrawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        savedPets={savedPets}
      />
      <BuyBonesDialog
        isOpen={isBonesDialogOpen}
        onClose={() => setIsBonesDialogOpen(false)}
      />
    </div>
  );
}
