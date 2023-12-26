import classNames from 'classnames';

import styles from './index.module.scss';

interface LogoCarouselProps {
  direction: 'leftToRight' | 'rightToLeft';
}

export default function LogoCarousel({
  direction = 'leftToRight',
}: LogoCarouselProps) {
  return (
    <div className={styles.carouselWrapper}>
      <div
        className={classNames(styles.carousel, styles[direction], 'gap-[56px]')}
      >
        {[1, 2, 3, 4, 5, 6, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18].map(
          (item) => (
            <div className={styles.stackItem} key={item}>
              <img
                loading="lazy"
                className="image css-hpreje"
                src="/assets/images/Logo-dark.svg"
                alt="Logo"
              />
            </div>
          ),
        )}
      </div>
    </div>
  );
}
