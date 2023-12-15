import classname from 'classnames';

import styles from './index.module.scss';

type TagProps = {
  className?: string;
  children: string;
  type?: 'success' | 'warning' | 'info';
};

const Tag = (props: TagProps) => {
  const { children, className, type } = props;
  return (
    <div
      className={classname(
        className,
        styles.tagWrapper,
        type ? styles[type] : '',
      )}
    >
      {children}
    </div>
  );
};

export default Tag;
