import React, { FC, forwardRef, Ref } from 'react';
import classNames from 'classnames';
import { Typography } from '../Typography';

import common from '../Typography.module.css';
import css from './PageTitle.module.css';

export type PageTitleProps = Typography &
  React.HTMLAttributes<HTMLHeadingElement>;

export interface PageTitleRef {
  ref?: Ref<HTMLHeadingElement>;
}

export const PageTitle: FC<PageTitleProps & PageTitleRef> = forwardRef(
  (
    {
      children,
      color,
      variant,
      disableMargins,
      className,
      fontWeight = 'bold',
      ...rest
    }: PageTitleProps,
    ref: Ref<HTMLHeadingElement>
  ) => (
    <h1
      ref={ref}
      className={classNames(
        common[color],
        common[variant],
        common[fontWeight],
        css.root,
        { [css.disableMargins]: disableMargins },
        className
      )}
      {...rest}
    >
      {children}
    </h1>
  )
);

PageTitle.defaultProps = {
  color: 'default',
  variant: 'default',
  fontWeight: 'normal',
  disableMargins: false
};
