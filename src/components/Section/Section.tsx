import classNames from 'classnames';
import type { ReactNode } from 'react';

import styles from './section.module.scss';

interface SectionProps {
  background?: string;
  children?: ReactNode;
  outClassName?: any;
  className?: any;
}

export default function Section({
  background = '--colors-background-bg-secondary_alt',
  children,
  outClassName,
  className,
}: SectionProps) {
  return (
    <div
      style={{ backgroundColor: `var(${background})` }}
      className={classNames(
        `py-[--spacing-7xl] md:py-[--spacing-9xl]`,
        `bg-[--colors-background-bg-secondary_alt]`,
        outClassName,
      )}
    >
      <div
        className={classNames(
          'container',
          'px-[--container-padding-mobile]',
          'md:px-[--container-padding-desktop]',
          styles.containerPadding,
          className,
        )}
      >
        {children}
      </div>
    </div>
  );
}
