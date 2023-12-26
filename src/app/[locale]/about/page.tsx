import { useLocale, useTranslations } from 'next-intl';

export default function About({ params }) {
  const t = useTranslations('About');
  const locale = useLocale();

  // const router = useRouter();
  console.log(params);

  return (
    <div>
      <p>{t('description')}</p>
      {locale}
    </div>
  );
}
