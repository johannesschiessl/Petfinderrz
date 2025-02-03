"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { ResponsiveDialog } from "@/components/responsive-dialog";
import { Bone, Sparkles } from "lucide-react";

interface BuyBonesDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export function BuyBonesDialog({ isOpen, onClose }: BuyBonesDialogProps) {
  const [bones, setBones] = useState(1);
  const [showSuccess, setShowSuccess] = useState(false);

  const handlePurchase = async () => {
    setShowSuccess(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    onClose();
    setShowSuccess(false);
    setBones(1);
  };

  return (
    <ResponsiveDialog
      isOpen={isOpen}
      onClose={onClose}
      title="Buy Bones"
      description="Support your favorite pets by buying bones. Each bone costs 1€."
    >
      <div className="p-6">
        <div className="flex items-center justify-center mb-8">
          <motion.div
            className="relative"
            animate={{ rotate: bones * 360 }}
            transition={{ duration: 0.5, type: "spring" }}
          >
            <div className="bg-neutral-100 rounded-full p-6 relative">
              <Bone className="h-12 w-12 text-neutral-900" />
              <motion.div
                className="absolute inset-0 rounded-full"
                animate={{
                  boxShadow: [
                    "0 0 0 0px rgba(0,0,0,0.1)",
                    "0 0 0 8px rgba(0,0,0,0)",
                  ],
                }}
                transition={{ duration: 1, repeat: Infinity }}
              />
            </div>
            <div className="absolute top-0 right-0 bg-neutral-900 text-white rounded-full h-8 w-8 flex items-center justify-center font-bold text-lg">
              {bones}
            </div>
          </motion.div>
        </div>
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <span className="font-medium">Number of Bones</span>
            <span className="font-bold text-2xl">{bones}€</span>
          </div>
          <Slider
            value={[bones]}
            onValueChange={([value]) => setBones(value)}
            min={1}
            max={10}
            step={1}
            className="py-4"
          />
          <p className="text-sm text-neutral-500 text-center">
            Move the slider to adjust the number of bones
          </p>
        </div>
      </div>
      <div className="border-t p-4 flex flex-col-reverse sm:flex-row gap-2 sm:gap-4">
        <Button
          variant="outline"
          className="rounded-full border-2 text-neutral-500 hover:bg-neutral-100 w-full sm:w-auto"
          onClick={onClose}
        >
          Cancel
        </Button>
        <Button
          className="rounded-full bg-neutral-900 hover:bg-neutral-800 w-full sm:w-auto relative overflow-hidden"
          onClick={handlePurchase}
          disabled={showSuccess}
        >
          <AnimatePresence mode="wait">
            {showSuccess ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="flex items-center gap-2"
              >
                <Sparkles className="h-5 w-5" />
                Success!
              </motion.div>
            ) : (
              <motion.div
                key="purchase"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                className="flex items-center gap-2"
              >
                Buy {bones} {bones === 1 ? "Bone" : "Bones"}
              </motion.div>
            )}
          </AnimatePresence>
          {showSuccess && (
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-blue-500/20"
              initial={{ scale: 0 }}
              animate={{ scale: 2 }}
              transition={{ duration: 0.5 }}
            />
          )}
        </Button>
      </div>
    </ResponsiveDialog>
  );
}
