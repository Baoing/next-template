import { useTranslations } from 'next-intl';

import Button from '@/components/Button/Button';

export default function NotFoundPage() {
  const t = useTranslations('NotFoundPage');
  return (
    <div
      className={
        'flex h-screen flex-wrap items-center bg-[--colors-background-bg-primary]'
      }
    >
      <div className={'container flex flex-wrap items-center gap-8 px-8'}>
        <div className={'md:flex-1'}>
          <div
            className={
              'text-md-bold text-[--colors-text-text-brand-secondary-700]'
            }
          >
            {t('errorText')}
          </div>
          <h1 className={'title-xl mt-3 text-[--colors-text-text-primary-900]'}>
            {t('title')}
          </h1>
          <p className={'mt-6 text-xl text-[--colors-text-text-tertiary-600]'}>
            {t('description')}
          </p>
          <Button type={'primary'} className={'mt-[--spacing-6xl]'} url={'/'}>
            {t('returnHome')}
          </Button>
        </div>
        <div className={'md:flex-1'}>
          <div className={'px-14'}>
            <img src="/assets/images/Illustration.png" alt="404" />
          </div>
        </div>
      </div>
    </div>
  );
}
