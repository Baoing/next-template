import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { useTranslations } from 'next-intl';
import React from 'react';

import Button from '@/components/Button/Button';
import LogoCarousel from '@/components/LogoCarousel';
import Section from '@/components/Section/Section';
import SVGIcon from '@/components/SvgIcon/SvgIcon';
import MainLayout from '@/layout/MainLayout';

export const metadata = {
  title: 'Acme',
  description: 'descriptiondescriptiondescription',
  openGraph: {
    title: 'Acme',
    description: 'Acme is a...',
  },
};

export default function Page() {
  const t = useTranslations('Index');
  const MenuT = useTranslations('Menu');

  return (
    <MainLayout>
      <div
        className={
          'bg-[--colors-background-bg-primary] py-[--spacing-7xl] md:pl-[--spacing-8xl]'
        }
      >
        <div
          className={
            'flex flex-col gap-[--spacing-7xl] pl-[--spacing-4xl] md:flex-row '
          }
        >
          <div className={'flex-1'}>
            <div className={' text-xl'}>{t('PostPurchaseSolution')}</div>
            <h1 className={'title-xl mt-4'}>{t('EmpowerFor')}</h1>
            <p
              className={
                'mt-[--spacing-4xl] text-[--colors-text-text-tertiary-600]'
              }
            >
              {t('IndexInfo')}
            </p>
            <div className={'mt-[--spacing-4xl] md:space-x-2'}>
              <Button
                className={'mt-3 w-full md:mt-0 md:w-auto'}
                type={'primary'}
                iconAfter={<SVGIcon icon={'arrow-narrow-up-right'}></SVGIcon>}
              >
                {t('TryParcelPanelFree')}
              </Button>
              <Button className={'mt-3 w-full md:mt-0 md:w-auto'}>
                {t('BookDemo')}
              </Button>
            </div>
          </div>
          <div className={'flex-1'}>
            <img src="/assets/images/Contents.png" alt="" />
          </div>
        </div>
      </div>

      <div
        className={
          'bg-[--colors-background-bg-primary] py-[--spacing-4xl] md:py-[--spacing-7xl]'
        }
      >
        <h2 className={'title-xs text-center'}>{t('TrustedBrandsTitle')}</h2>
        <div className={'mt-[--spacing-6xl] flex flex-col gap-10'}>
          <LogoCarousel direction={'rightToLeft'} />
          <LogoCarousel />
          <LogoCarousel direction={'rightToLeft'} />
        </div>
      </div>
      <Section
        background={'--colors-background-bg-primary'}
        className={'gap-[64px] text-[--colors-text-text-primary-900] md:flex'}
      >
        <div className={'flex-1'}>
          <div className={'title-lg'}>{t('BuiltForPeaceTitle')}</div>
          <div className={'title-xs mt-6'}>{t('OutBox')}</div>
          <div
            className={'mt-3 text-xl text-[--colors-text-text-tertiary-600]'}
          >
            {t('OutBoxText')}
          </div>
          <div className={'title-xs mt-6'}>{t('SupportTitle')}</div>
          <div
            className={'mt-3 text-xl text-[--colors-text-text-tertiary-600]'}
          >
            {t('SupportText')}
          </div>

          <Button
            className={'mt-[--spacing-6xl] w-full md:w-auto'}
            iconAfter={
              <SVGIcon color={'#000'} icon={'arrow-narrow-up-right'}></SVGIcon>
            }
          >
            {t('ContactUs')}
          </Button>
        </div>
        <div className={'mt-[--spacing-7xl] flex-1 md:mt-0'}>
          <img src="/assets/images/Contents.png" alt="" />
        </div>
      </Section>

      <Section
        background={'--colors-background-bg-tertiary'}
        className={'flex text-[--colors-text-text-primary-900]'}
      >
        <div className={'title-md w-full text-center'}>
          {t('EnterpriseGrade')}
        </div>

        <div className={'flex flex-col gap-[--spacing-4xl] md:flex-row'}>
          <div className={''}></div>
        </div>
      </Section>

      <Section
        background={'--colors-background-bg-brand-solid'}
        outClassName={'relative'}
        className={
          'gap-[--spacing-4xl] text-[--colors-text-text-primary-900] md:flex md:py-[--spacing-4xl]'
        }
      >
        <div className={'absolute left-0 top-0 z-0'}>
          <img src="/assets/images/LinePattern.png" alt="" />
        </div>
        <div className={'absolute bottom-0 right-0 z-0'}>
          <img src="/assets/images/LinePattern2.png" alt="" />
        </div>

        <div className={'z-1 relative w-[200px] md:w-[328px]'}>
          <img src="/assets/images/Image.png" alt="" />
        </div>
        <div
          className={
            'z-1 relative flex flex-col items-center justify-center	 md:ml-6 md:pl-[--spacing-7xl]'
          }
        >
          <div
            className={
              'title-xs mt-10 w-full font-medium text-[--colors-text-text-primary_on-brand] md:mt-0 md:text-4xl md:leading-[44px]'
            }
          >
            {t('JoinBrands')}
          </div>
          <div className={'mt-8 w-full md:space-x-4'}>
            <Button className={'w-full md:w-auto'}>{MenuT('bookDemo')}</Button>
            <Button
              className={'mt-3 w-full md:mt-0 md:w-auto'}
              type={'primary'}
              iconAfter={<SVGIcon icon={'arrow-narrow-up-right'}></SVGIcon>}
            >
              {t('TryParcelPanelFree')}
            </Button>
          </div>
        </div>
      </Section>
    </MainLayout>
  );
}
