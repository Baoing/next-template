import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { useTranslations } from 'next-intl';
import React from 'react';

import SVGIcon from '@/components/SvgIcon/SvgIcon';
import MainLayout from '@/layout/MainLayout';

import Card from './components/Card';

export const metadata = {
  title: 'Acme',
  description: 'descriptiondescriptiondescription',
  openGraph: {
    title: 'Acme',
    description: 'Acme is a...',
  },
};

export default function Page() {
  const t = useTranslations('TryFree');

  const apps = [
    {
      logo: 'https://b-cdn.parcelpanel.com/logos/parcelpanel.svg',
      title: 'ParcelPanel',
      pic: 'https://b-cdn.parcelpanel.com/logos/Rectangle1.png',
      desc: t('desc1'),
      buttons: [
        {
          name: (
            <div className={'flex space-x-[--spacing-lg]'}>
              <SVGIcon size={24} initSize={24} icon={'shopify'} />
              <span>Shopify</span>
            </div>
          ),
          url: '#',
        },
        {
          name: (
            <div className={'flex space-x-[--spacing-lg]'}>
              <SVGIcon size={24} initSize={24} icon={'woocommerce'} />
              <span>Woocommerce</span>
            </div>
          ),
          url: '#',
        },
      ],
      learnMore: '#',
    },
    {
      logo: 'https://b-cdn.parcelpanel.com/logos/return.png',
      title: 'Returns',
      pic: 'https://b-cdn.parcelpanel.com/logos/Rectangle2.png',
      desc: t('desc2'),
      buttons: [
        {
          name: (
            <div className={'flex space-x-[--spacing-lg]'}>
              <SVGIcon size={24} initSize={24} icon={'shopify'} />
              <span>Shopify</span>
            </div>
          ),
          url: '#',
        },
      ],
      learnMore: '#',
    },
    {
      logo: 'https://b-cdn.parcelpanel.com/logos/insurance.svg',
      title: 'Insurance',
      pic: 'https://b-cdn.parcelpanel.com/logos/Rectangle3.png',
      desc: t('desc3'),
      buttons: [
        {
          name: (
            <div className={'flex space-x-[--spacing-lg]'}>
              <SVGIcon size={24} initSize={24} icon={'shopify'} />
              <span>Shopify</span>
            </div>
          ),
          url: '#',
        },
      ],
      learnMore: '#',
    },
  ];

  return (
    <MainLayout>
      <div
        className={
          'container px-[--container-padding-mobile] py-[--spacing-4xl] md:px-[--container-padding-desktop] md:py-[--spacing-7xl]'
        }
      >
        <h1 className={'title-lg'} style={{ fontWeight: 600 }}>
          {t('title')}
        </h1>
        <p className={'mt-6 text-xl text-[--colors-text-text-tertiary-600]'}>
          {t('description')}
        </p>
      </div>

      <div
        className={
          'container flex flex-col gap-[--spacing-4xl] px-[--container-padding-mobile] pb-[--spacing-4xl] md:flex-row md:px-[--container-padding-desktop] md:pb-[--spacing-9xl]'
        }
      >
        {apps.map((item) => (
          <Card {...item} key={item.title} />
        ))}
      </div>
    </MainLayout>
  );
}
