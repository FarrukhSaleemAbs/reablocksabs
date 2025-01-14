import React, { FC, forwardRef, Ref } from 'react';
import classNames from 'classnames';
import css from './SmallHeading.module.css';
import common from '../Typography.module.css';

export type SmallHeadingColors =
  | 'default'
  | 'primary'
  | 'secondary'
  | 'error'
  | 'success'
  | 'warning'
  | 'info';

export interface SmallHeadingProps
  extends React.HTMLAttributes<HTMLHeadingElement> {
  /**
   * Color variation of the title.
   */
  color?: SmallHeadingColors;

  /**
   * Font variant for the heading.
   */
  variant?: 'default' | 'mono';

  /**
   * Whether to disable the margins.
   */
  disableMargins?: boolean;
}

export interface SmallHeadingRef {
  ref?: Ref<HTMLHeadingElement>;
}

export const SmallHeading: FC<SmallHeadingProps & SmallHeadingRef> = forwardRef(
  (
    {
      children,
      color,
      variant,
      disableMargins,
      className,
      ...rest
    }: SmallHeadingProps,
    ref: Ref<HTMLHeadingElement>
  ) => (
    <h5
      ref={ref}
      className={classNames(
        common[color],
        common[variant],
        css.root,
        { [css.disableMargins]: disableMargins },
        className
      )}
      {...rest}
    >
      {children}
    </h5>
  )
);

SmallHeading.defaultProps = {
  color: 'default',
  variant: 'default',
  disableMargins: false
};
