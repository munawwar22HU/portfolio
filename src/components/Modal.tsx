"use client";

import { AnimatePresence, motion } from "framer-motion";

export default function Modal({
  open,
  title,
  onClose,
  children,
}: {
  open: boolean;
  title: string;
  onClose: () => void;
  children: React.ReactNode;
}) {
  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <button className="absolute inset-0 bg-black/70" onClick={onClose} aria-label="Close overlay" />
          <motion.div
            className="relative w-full max-w-2xl overflow-hidden rounded-2xl border border-white/10 bg-zinc-950"
            initial={{ y: 18, scale: 0.98, opacity: 0 }}
            animate={{ y: 0, scale: 1, opacity: 1 }}
            exit={{ y: 18, scale: 0.98, opacity: 0 }}
            transition={{ type: "spring", stiffness: 240, damping: 22 }}
            role="dialog"
            aria-modal="true"
          >
            <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
              <h3 className="text-sm font-semibold text-white">{title}</h3>
              <button onClick={onClose} className="rounded-lg px-3 py-1 text-sm text-zinc-300 hover:bg-white/5 hover:text-white">
                Close
              </button>
            </div>
            <div className="p-5 text-zinc-300">{children}</div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
