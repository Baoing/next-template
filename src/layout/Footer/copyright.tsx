import Link from 'next/link';
import { useTranslations } from 'next-intl';

import SVGIcon from '@/components/SvgIcon/SvgIcon';

export default function Copyright() {
  const t = useTranslations('Footer');
  return (
    <div
      className={
        'container px-[--container-padding-mobile] md:px-[--container-padding-desktop]'
      }
    >
      <div
        style={{ borderTop: '1px solid var(--colors-border-border-disabled)' }}
        className={
          'flex flex-col-reverse items-start justify-between  gap-[--spacing-3xl]  pb-[--spacing-6xl] pt-[--spacing-4xl] text-[--colors-text-text-quarterary-500] md:flex-row md:items-center  md:pb-[--spacing-6xl] md:pt-[--spacing-4xl]'
        }
      >
        <div>{t('Copyright', { time: new Date().getFullYear() })}</div>

        <div className={'flex gap-[--spacing-3xl]'}>
          <Link href={'#'}>
            <SVGIcon icon={'social-ins'} size={24} initSize={24} />
          </Link>
          <Link href={'#'}>
            <SVGIcon icon={'social-facebook'} size={24} initSize={24} />
          </Link>
          <Link href={'#'}>
            <SVGIcon icon={'social-x'} size={24} initSize={24} />
          </Link>
          <Link href={'#'}>
            <SVGIcon icon={'social-youtube'} size={24} initSize={24} />
          </Link>
          <Link href={'#'}>
            <SVGIcon icon={'social-stroke'} size={24} initSize={24} />
          </Link>
        </div>
      </div>
    </div>
  );
}
