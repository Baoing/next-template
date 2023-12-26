import { useTranslations } from 'next-intl';

import Button from '@/components/Button/Button';

export default function Home() {
  const t = useTranslations('Index');

  return (
    <div>
      <Button></Button>
      <p>{t('description')}</p>{' '}
    </div>
  );
}
