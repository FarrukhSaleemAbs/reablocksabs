import React, { FC } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import css from './Range.module.css';

export interface RangeProps<Value> {
  /**
   * Whether the range is disabled
   */
  disabled?: boolean;

  /**
   * Additional class name to apply to the range
   */
  className?: string;

  /**
   * Additional class name to apply to the handle
   */
  handleClassName?: string;

  /**
   * The minimum value of the range
   */
  min: number;

  /**
   * The maximum value of the range
   */
  max: number;

  /**
   * The value of the range
   */
  value: Value;

  /**
   * Additional css styles to apply to the range
   */
  style?: React.CSSProperties;

  /**
   * Event fired when the range value changes
   */
  onChange?: (value: Value) => void;
}

export interface RangeTooltipProps {
  children?: React.ReactNode;
  visible: boolean;
}

export const RangeTooltip: FC<RangeTooltipProps> = ({ children, visible }) => (
  <AnimatePresence>
    {visible && (
      <motion.div
        className={css.tooltip}
        initial={{
          opacity: 0,
          scale: 0.3,
          translateX: '-50%'
        }}
        animate={{
          opacity: 1,
          scale: 1
        }}
        exit={{ opacity: 0, scale: 0.3 }}
      >
        {children}
      </motion.div>
    )}
  </AnimatePresence>
);
