import classNames from 'classnames';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

import styles from './footer.module.scss';

export default function LinkList() {
  const t = useTranslations('Footer');

  const data = [
    {
      title: t('Products'),
      list: [
        {
          title: t('OrderTracking'),
          link: '#',
        },
        {
          title: t('ReturnsExchanges'),
          link: '#',
        },
        {
          title: t('ShippingProtection'),
          link: '#',
        },
        {
          title: t('Pricing'),
          link: '#',
        },
      ],
    },
    {
      title: t('Partners'),
      list: [
        {
          title: t('Carriers'),
          link: '#',
        },
        {
          title: t('Integrations'),
          link: '#',
        },
        {
          title: t('PartnerProgram'),
          link: '#',
        },
        {
          title: t('SolutionsPartner'),
          link: '#',
        },
        {
          title: t('AffiliatePartner'),
          link: '#',
        },
        {
          title: t('TechnologyPartner'),
          link: '#',
        },
      ],
    },
    {
      title: t('Resources'),
      list: [
        {
          title: t('Customers'),
          link: '#',
        },
        {
          title: t('Blog'),
          link: '#',
        },
        {
          title: t('PlatformsBrands'),
          link: '#',
        },
        {
          title: t('Compare'),
          link: '#',
        },
        {
          title: t('HelpCenter'),
          link: '#',
        },
        {
          title: t('SystemStatus'),
          link: '#',
        },
        {
          title: t('SiteMap'),
          link: '#',
        },
      ],
    },
    {
      title: t('Company'),
      list: [
        {
          title: t('AboutUs'),
          link: '#',
        },
        {
          title: t('ContactUs'),
          link: '#',
        },
        {
          title: t('PrivacyPolicy'),
          link: '#',
        },
        {
          title: t('TermsService'),
          link: '#',
        },
      ],
    },
  ];

  return (
    <div className={'flex w-full flex-wrap gap-[--spacing-4xl]'}>
      {data.map((item) => (
        <div
          className={classNames(styles.gridFooter, 'md:flex-1')}
          key={item.title}
        >
          <div className={'text-md-bold mb-4 md:font-bold'}>{item.title}</div>
          <div className={'flex flex-col gap-[--spacing-lg]'}>
            {item.list.map((link) => (
              <Link
                href={link.link}
                className={'block hover:underline'}
                key={link.title}
              >
                {link.title}
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
