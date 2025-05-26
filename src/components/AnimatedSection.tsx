'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  initial?: any;
  animate?: any;
  whileInView?: any;
  viewport?: any;
  transition?: any;
  whileHover?: any;
}

export default function AnimatedSection({
  children,
  className = '',
  delay = 0,
  initial = { opacity: 0, y: 20 },
  animate = { opacity: 1, y: 0 },
  whileInView,
  viewport = { once: true },
  transition = { duration: 0.5 },
  whileHover,
}: AnimatedSectionProps) {
  const motionProps = {
    initial,
    animate,
    whileInView,
    viewport,
    transition: { ...transition, delay },
    whileHover,
    className,
  };

  return <motion.div {...motionProps}>{children}</motion.div>;
} 