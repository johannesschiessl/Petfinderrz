"use client";

import { useMediaQuery } from "@/hooks/use-media-query";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";

interface ResponsiveDialogProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title?: string;
  description?: string;
}

export function ResponsiveDialog({
  isOpen,
  onClose,
  children,
  title,
  description,
}: ResponsiveDialogProps) {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  if (isDesktop) {
    return (
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="sm:max-w-2xl border-2 rounded-2xl bg-white">
          {(title || description) && (
            <DialogHeader className="border-b border-neutral-200 pb-4">
              {title && (
                <DialogTitle className="text-2xl font-semibold text-neutral-900">
                  {title}
                </DialogTitle>
              )}
              {description && (
                <DialogDescription className="text-neutral-500 mt-1.5">
                  {description}
                </DialogDescription>
              )}
            </DialogHeader>
          )}
          <div className="overflow-hidden">{children}</div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={isOpen} onClose={onClose}>
      <DrawerContent className="rounded-t-2xl bg-white">
        {(title || description) && (
          <DrawerHeader className="border-b border-neutral-200 pb-4">
            {title && (
              <DrawerTitle className="text-2xl font-semibold text-neutral-900">
                {title}
              </DrawerTitle>
            )}
            {description && (
              <DrawerDescription className="text-neutral-500 mt-1.5">
                {description}
              </DrawerDescription>
            )}
          </DrawerHeader>
        )}
        <div className="overflow-hidden">{children}</div>
      </DrawerContent>
    </Drawer>
  );
}
