import { useTranslations } from 'next-intl';

import Button from '@/components/Button/Button';
import SVGIcon from '@/components/SvgIcon/SvgIcon';

import styles from './Card.module.scss';

interface CardProps {
  logo?: string;
  title?: string;
  pic?: string;
  desc?: string;
  buttons?: { name: string; url: string }[];
  learnMore?: string;
}

export default function Card({
  logo,
  title,
  pic,
  desc,
  buttons,
  learnMore,
}: CardProps) {
  const t = useTranslations('TryFree');

  return (
    <div className={styles.cardWrapper}>
      <div className={styles.cardTop}>
        <div className={'h-12'}>
          <img className={'h-full w-auto'} src={logo} alt={title} />
        </div>
        <div
          className={
            'title-sm mt-[--spacing-xl] text-[--colors-text-text-primary-900]'
          }
        >
          {title}
        </div>
        <div className={'w-200px mt-[--spacing-5xl] max-w-full'}>
          <img src={pic} alt={title} />
        </div>

        <div
          className={
            'text-md mt-[30px] max-w-full text-center text-[--colors-text-text-tertiary-600]'
          }
        >
          {desc}
        </div>
      </div>

      <div className={styles.cardBottom}>
        <div className={'flex gap-[--spacing-md]'}>
          {buttons?.map((item) => (
            <a
              href={'#'}
              className={
                'text-md-bold cursor-pointer rounded-2xl bg-[#1877F2] px-[--spacing-xl] py-[10px] text-white'
              }
              key={item.name}
            >
              {item.name}
            </a>
          ))}
        </div>

        <Button
          className={'mt-4'}
          type={'link'}
          url={learnMore}
          iconAfter={<SVGIcon icon={'arrow-right'} color={'#0049B5'}></SVGIcon>}
        >
          {t('LearnMore')}
        </Button>
      </div>
    </div>
  );
}
