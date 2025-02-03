"use client";

import { useState, useEffect } from "react";
import {
  motion,
  type PanInfo,
  useAnimation,
  AnimatePresence,
} from "framer-motion";
import type { Pet } from "../types/pet";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, X } from "lucide-react";

interface SwipeCardProps {
  pet: Pet;
  onSwipe: (direction: "left" | "right") => void;
}

export function SwipeCard({ pet, onSwipe }: SwipeCardProps) {
  const [exitX, setExitX] = useState(0);
  const [showStatus, setShowStatus] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    setShowStatus(false);
    setExitX(0);
    controls.set({ x: 0, opacity: 1, scale: 1, rotate: 0 });
  }, [pet.id, controls]);

  const onDragEnd = async (
    event: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo,
  ) => {
    if (info.offset.x > 100) {
      setExitX(200);
      setShowStatus(true);
      await controls.start({
        x: 200,
        opacity: 0,
        transition: { duration: 0.5 },
      });
      onSwipe("right");
    } else if (info.offset.x < -100) {
      setExitX(-200);
      setShowStatus(true);
      await controls.start({
        x: -200,
        opacity: 0,
        transition: { duration: 0.5 },
      });
      onSwipe("left");
    } else {
      controls.start({
        x: 0,
        opacity: 1,
        transition: { type: "spring", stiffness: 300, damping: 20 },
      });
    }
  };

  const onDirectionalDrag = (info: PanInfo) => {
    const scaleFactor = Math.min(Math.abs(info.offset.x) / 300, 1);
    if (info.offset.x > 0) {
      controls.start({
        rotate: 10 * scaleFactor,
        scale: 1 - 0.1 * scaleFactor,
      });
    } else {
      controls.start({
        rotate: -10 * scaleFactor,
        scale: 1 - 0.1 * scaleFactor,
      });
    }
  };

  return (
    <motion.div
      key={pet.id}
      drag="x"
      dragConstraints={{ left: 0, right: 0 }}
      onDragEnd={onDragEnd}
      animate={controls}
      whileTap={{ scale: 1.05 }}
      dragElastic={0.9}
      onDrag={(e, info) => onDirectionalDrag(info)}
      initial={{ scale: 1, rotate: 0, x: 0, opacity: 1 }}
      className="relative w-full max-w-[320px] mx-auto touch-none"
    >
      <Card className="w-full aspect-[3/4] overflow-hidden border-2 rounded-2xl bg-white">
        <CardContent className="p-0 h-full flex flex-col">
          <div className="relative h-3/4">
            <img
              src={pet.images[0] || "/placeholder.svg"}
              alt={pet.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-neutral-900 to-transparent p-6 text-white">
              <h2 className="text-xl md:text-2xl font-bold mb-1">{pet.name}</h2>
              <p className="text-sm md:text-base text-neutral-100">
                {pet.race}
              </p>
              <p className="text-sm md:text-base text-neutral-200">
                {pet.location.distance} km away • {pet.location.city}
              </p>
            </div>
          </div>
          <div className="flex-1 flex items-center justify-around p-6 bg-white">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full h-14 w-14 border-2 hover:bg-neutral-100 text-neutral-500"
              onClick={() =>
                onDragEnd(
                  // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  {} as any,
                  {
                    offset: { x: -150, y: 0 },
                    velocity: { x: 0, y: 0 },
                  } as PanInfo,
                )
              }
            >
              <X className="h-6 w-6" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full h-14 w-14 border-2 hover:bg-neutral-100 text-neutral-500"
              onClick={() =>
                onDragEnd(
                  // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  {} as any,
                  {
                    offset: { x: 150, y: 0 },
                    velocity: { x: 0, y: 0 },
                  } as PanInfo,
                )
              }
            >
              <Heart className="h-6 w-6" />
            </Button>
          </div>
        </CardContent>
      </Card>
      <AnimatePresence>
        {showStatus && (
          <motion.div
            key={exitX > 0 ? "saved" : "passed"}
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            {exitX > 0 ? (
              <div className="bg-green-100 text-green-500 px-6 py-3 rounded-full text-xl font-semibold border-4 border-green-500 shadow-xl backdrop-blur-sm">
                <Heart className="h-8 w-8 inline-block mr-2 animate-bounce" />
                Saved!
              </div>
            ) : (
              <div className="bg-red-100 text-red-500 px-6 py-3 rounded-full text-xl font-semibold border-4 border-red-500 shadow-xl backdrop-blur-sm">
                <X className="h-8 w-8 inline-block mr-2 animate-bounce" />
                Passed
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
