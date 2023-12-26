import { notFound } from 'next/navigation';
import { useLocale } from 'next-intl';
import type { ReactNode } from 'react';

const locales = ['en', 'de'];

type Props = {
  children: ReactNode;
  params: { locale: string };
};

export default async function LocaleLayout({ children }: Props) {
  const locale = useLocale();

  if (!locales.includes(locale as any)) notFound();

  return (
    <html lang={locale}>
      <head>
        <title>next-template</title>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </head>
      <body>{children}</body>
    </html>
  );
}
