'use client';

import type React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

type GradientBackgroundProps = React.ComponentProps<'div'> & {
  gradients?: string[];
  animationDuration?: number;
  animationDelay?: number;
  enableCenterContent?: boolean;
  overlay?: boolean;
  overlayOpacity?: number;
};

const Default_Gradients = [
  'linear-gradient(135deg, #0f0e36 0%, #1a1850 100%)',
  'linear-gradient(135deg, #1a1850 0%, #252360 100%)',
  'linear-gradient(135deg, #0f0e36 0%, #252360 60%, #fec539 120%)',
  'linear-gradient(135deg, #1f1b68 0%, #0f0e36 80%)',
  'linear-gradient(135deg, #0f0e36 0%, #1a1850 100%)',
];

export function GradientBackground({
  children,
  className = '',
  gradients = Default_Gradients,
  animationDuration = 9,
  animationDelay = 0.5,
  overlay = true,
  overlayOpacity = 0.2,
}: GradientBackgroundProps) {
  return (
    <div className={cn('w-full relative min-h-screen overflow-hidden', className)}>
      <motion.div
        className="absolute inset-0"
        style={{ background: gradients[0] }}
        animate={{ background: gradients }}
        transition={{
          delay: animationDelay,
          duration: animationDuration,
          repeat: Number.POSITIVE_INFINITY,
          ease: 'easeInOut',
        }}
      />

      {overlay && (
        <div className="absolute inset-0 bg-black" style={{ opacity: overlayOpacity }} />
      )}

      {children && (
        <div className="relative z-10 flex min-h-screen items-center justify-center">
          {children}
        </div>
      )}
    </div>
  );
}
