import classNames from 'classnames';

import styles from './index.module.scss';

type CardProps = {
  title?: React.ReactNode | string;
  children?: React.ReactNode;
  noPadding?: boolean;
  className?: string;
};

const Card = (props: CardProps) => {
  const { title, children, noPadding, className } = props;
  return (
    <div
      className={classNames(
        styles.cardWrapper,
        className,
        noPadding ? '' : 'p-5',
      )}
    >
      {title && <div className={'mb-4 font-semibold'}>{title}</div>}
      {children}
    </div>
  );
};
export default Card;
