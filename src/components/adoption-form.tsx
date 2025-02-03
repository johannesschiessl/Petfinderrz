"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { ResponsiveDialog } from "@/components/responsive-dialog";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ScrollArea } from "@/components/ui/scroll-area";
import { PawPrint, Sparkles } from "lucide-react";
import type { Pet } from "@/types/pet";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  address: z.string().min(10, "Please enter your full address"),
  message: z.string().optional(),
});

interface AdoptionFormProps {
  isOpen: boolean;
  onClose: () => void;
  pet: Pet;
}

export function AdoptionForm({ isOpen, onClose, pet }: AdoptionFormProps) {
  const [showSuccess, setShowSuccess] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      address: "",
      message: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setShowSuccess(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log(values);
    onClose();
    setShowSuccess(false);
    form.reset();
  };

  return (
    <ResponsiveDialog
      isOpen={isOpen}
      onClose={onClose}
      title="Adopt a Pet"
      description={`Fill out this form to start the adoption process for ${pet.name}`}
    >
      <div className="flex flex-col h-full max-h-[calc(100vh-8rem)] md:max-h-none">
        <ScrollArea className="flex-1">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-6 p-6"
            >
              <div className="flex items-center gap-4 pb-4 border-b">
                <img
                  src={pet.images[0] || "/placeholder.svg"}
                  alt={pet.name}
                  className="w-16 h-16 rounded-2xl object-cover border-2"
                />
                <div>
                  <h3 className="font-semibold text-lg">{pet.name}</h3>
                  <p className="text-neutral-500">{pet.race}</p>
                </div>
              </div>

              <div className="space-y-4">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="John Doe"
                          className="rounded-xl border-2"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="john@example.com"
                          className="rounded-xl border-2"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone Number</FormLabel>
                      <FormControl>
                        <Input
                          type="tel"
                          placeholder="+1 234 567 890"
                          className="rounded-xl border-2"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="address"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Address</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Enter your full address"
                          className="rounded-xl border-2 min-h-[80px]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message (Optional)</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Tell us why you'd be a great pet parent..."
                          className="rounded-xl border-2 min-h-[100px]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </form>
          </Form>
        </ScrollArea>

        <div className="border-t p-4 flex flex-col-reverse sm:flex-row gap-2 sm:gap-4 bg-white">
          <Button
            type="button"
            variant="outline"
            className="rounded-full border-2 text-neutral-500 hover:bg-neutral-100 w-full sm:w-auto"
            onClick={onClose}
          >
            Cancel
          </Button>
          <Button
            type="submit"
            form={form.formState.defaultValues ? "adoption-form" : undefined}
            className="rounded-full bg-neutral-900 hover:bg-neutral-800 w-full sm:w-auto relative overflow-hidden"
            disabled={showSuccess || form.formState.isSubmitting}
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
                  Application Sent!
                </motion.div>
              ) : (
                <motion.div
                  key="submit"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  className="flex items-center gap-2"
                >
                  <PawPrint className="h-5 w-5" />
                  Submit Application
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
      </div>
    </ResponsiveDialog>
  );
}
