"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { BuyBonesDialog } from "@/components/buy-bones-dialog";
import { AdoptionForm } from "@/components/adoption-form";
import { ResponsiveDialog } from "@/components/responsive-dialog";
import type { Pet } from "@/types/pet";
import { Bone, PawPrint } from "lucide-react";

interface SavedPetsDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  savedPets: Pet[];
}

export function SavedPetsDrawer({
  isOpen,
  onClose,
  savedPets,
}: SavedPetsDrawerProps) {
  const [isBonesDialogOpen, setIsBonesDialogOpen] = useState(false);
  const [selectedPet, setSelectedPet] = useState<Pet | null>(null);

  return (
    <>
      <ResponsiveDialog
        isOpen={isOpen}
        onClose={onClose}
        title="Saved Pets"
        description="Your favorite pet friends are waiting for you!"
      >
        <ScrollArea className="h-[60vh] px-6">
          {savedPets.map((pet) => (
            <div
              key={pet.id}
              className="group flex flex-col sm:flex-row sm:items-center justify-between py-6 border-b border-neutral-200 gap-4 hover:bg-neutral-50 transition-colors"
            >
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <img
                    src={pet.images[0] || "/placeholder.svg"}
                    alt={pet.name}
                    className="w-16 h-16 rounded-2xl object-cover border-2 border-neutral-200 group-hover:border-neutral-300 transition-colors"
                  />
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-neutral-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-neutral-900">
                    {pet.name}
                  </h3>
                  <p className="text-neutral-500">{pet.race}</p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-2 sm:space-x-3 w-full sm:w-auto">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto justify-center rounded-full border-2 text-neutral-500 hover:bg-neutral-100 hover:text-neutral-700 transition-colors"
                  onClick={() => setIsBonesDialogOpen(true)}
                >
                  <Bone className="w-5 h-5 mr-2" />
                  Buy Bones
                </Button>
                <Button
                  size="lg"
                  className="w-full sm:w-auto justify-center rounded-full bg-neutral-900 hover:bg-neutral-800 text-white transition-colors"
                  onClick={() => setSelectedPet(pet)}
                >
                  <PawPrint className="w-5 h-5 mr-2" />
                  Adopt
                </Button>
              </div>
            </div>
          ))}
          {savedPets.length === 0 && (
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <div className="bg-neutral-100 rounded-full p-4 mb-4">
                <PawPrint className="w-8 h-8 text-neutral-500" />
              </div>
              <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                No saved pets yet
              </h3>
              <p className="text-neutral-500 max-w-sm">
                Start swiping to find your perfect pet friend!
              </p>
            </div>
          )}
        </ScrollArea>
        <div className="border-t border-neutral-200 p-4 bg-white">
          <Button
            variant="outline"
            className="rounded-full border-2 w-full text-neutral-500 hover:bg-neutral-100 hover:text-neutral-700 transition-colors"
            onClick={onClose}
          >
            Close
          </Button>
        </div>
      </ResponsiveDialog>
      <BuyBonesDialog
        isOpen={isBonesDialogOpen}
        onClose={() => setIsBonesDialogOpen(false)}
      />
      {selectedPet && (
        <AdoptionForm
          isOpen={true}
          onClose={() => setSelectedPet(null)}
          pet={selectedPet}
        />
      )}
    </>
  );
}
