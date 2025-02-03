"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { X } from "lucide-react";

interface AdCardProps {
  ad: {
    id: string;
    title: string;
    description: string;
    image: string;
    link: string;
  };
  onComplete: () => void;
}

export function AdCard({ ad, onComplete }: AdCardProps) {
  const [timeLeft, setTimeLeft] = useState(10);
  const [canSkip, setCanSkip] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          setCanSkip(true);
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div
      key={ad.id}
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.8, opacity: 0 }}
      className="relative w-full max-w-[320px] mx-auto"
    >
      <Card className="w-full aspect-[3/4] overflow-hidden border-2 rounded-2xl bg-white">
        <CardContent className="p-0 h-full flex flex-col">
          <div className="relative h-3/4">
            <img
              src={ad.image}
              alt={ad.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 right-4">
              <Button
                variant="outline"
                size="icon"
                className="rounded-full h-10 w-10 bg-white/80 backdrop-blur-sm border-2 hover:bg-white disabled:opacity-50"
                onClick={onComplete}
                disabled={!canSkip}
              >
                <X className="h-5 w-5" />
              </Button>
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-neutral-900 to-transparent p-6 text-white">
              <h2 className="text-xl md:text-2xl font-bold mb-2">{ad.title}</h2>
              <p className="text-sm md:text-base text-neutral-100">
                {ad.description}
              </p>
            </div>
          </div>
          <div className="flex-1 flex flex-col justify-end p-6 space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between text-sm text-neutral-500">
                <span>Ad will close in</span>
                <span>{timeLeft}s</span>
              </div>
              <Progress value={(10 - timeLeft) * 10} className="h-1" />
            </div>
            <Button
              className="w-full rounded-full bg-neutral-900 hover:bg-neutral-800 text-white transition-colors"
              onClick={() => window.open(ad.link, "_blank")}
            >
              Learn More
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
