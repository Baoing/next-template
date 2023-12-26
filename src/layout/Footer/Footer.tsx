import { useTranslations } from 'next-intl';

import Logo from '@/components/Logo';
import Copyright from '@/layout/Footer/copyright';
import LinkList from '@/layout/Footer/LinkList';

export default function Footer() {
  const t = useTranslations('Footer');

  return (
    <div className={'bg-[--colors-background-bg-primary-solid] text-white '}>
      <div
        className={
          'container gap-[--spacing-7xl]  px-[--container-padding-mobile] py-[--spacing-4xl] md:flex md:px-[--container-padding-desktop] md:py-[--spacing-7xl]'
        }
      >
        <div
          className={
            'flex w-[--width-xxs] max-w-full flex-col gap-[--spacing-4xl]'
          }
        >
          <Logo theme={'light'} />
          <p>{t('footerText')}</p>
        </div>

        <div className={'mt-[--spacing-6xl]  md:my-0'}>
          <LinkList />
        </div>
      </div>

      <Copyright />
    </div>
  );
}
