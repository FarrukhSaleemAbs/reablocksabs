import React, { FC } from 'react';
import classNames from 'classnames';
import css from './Arrow.module.css';

export interface ArrowProps {
  /**
   * CSS Classname to apply to the arrow
   */
  className?: string;

  /**
   * The direction of the arrow
   */
  direction?: 'up' | 'right' | 'down' | 'left';
}

export const Arrow: FC<ArrowProps> = ({ direction = 'down', className }) => (
  <svg
    className={classNames(css[direction], className)}
    xmlns="http://www.w3.org/2000/svg"
    x="0px"
    y="0px"
    width="50"
    height="50"
    viewBox="0 0 32 32"
  >
    <path d="M 4.21875 10.78125 L 2.78125 12.21875 L 15.28125 24.71875 L 16 25.40625 L 16.71875 24.71875 L 29.21875 12.21875 L 27.78125 10.78125 L 16 22.5625 Z" />
  </svg>
);
