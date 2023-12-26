import classNames from 'classnames';
import Link from 'next/link';
import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react';
import React from 'react';

import styles from './Button.module.scss';

type ButtonType = 'primary' | 'dashed' | 'link' | 'text' | 'default';

interface ButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'type'>,
    Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'type'> {
  type?: ButtonType;
  size?: 'small' | 'medium' | 'large';
  shape?: 'default' | 'circle' | 'round';
  iconBefore?: React.ReactElement;
  iconAfter?: React.ReactElement;
  full?: boolean;
  url?: string; // 新增的 URL 参数
}

const Button: React.FC<ButtonProps> = ({
  type = 'default',
  size = 'medium',
  shape = 'round',
  iconBefore,
  iconAfter,
  className,
  full,
  url,
  ...props
}) => {
  const classes = classNames(
    styles.button,
    styles[`button--${type}`],
    styles[`button--${size}`],
    styles[`button--${shape}`],
    full ? styles[`button--full`] : '',
    className,
  );

  if (url) {
    // 如果提供了 URL，则使用 <a> 标签
    return (
      <Link href={url} className={classes} {...props}>
        {iconBefore && (
          <span className={styles['button__icon-before']}>{iconBefore}</span>
        )}
        <div className={styles['text-padding']}>{props.children}</div>
        {iconAfter && (
          <span className={styles['button__icon-after']}>{iconAfter}</span>
        )}
      </Link>
    );
  }
  // 否则使用 <button> 标签
  return (
    <button className={classes} {...props}>
      {iconBefore && (
        <span className={styles['button__icon-before']}>{iconBefore}</span>
      )}
      <div className={styles['text-padding']}>{props.children}</div>
      {iconAfter && (
        <span className={styles['button__icon-after']}>{iconAfter}</span>
      )}
    </button>
  );
};

export default Button;
