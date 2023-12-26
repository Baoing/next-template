import classNames from 'classnames';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

import Button from '@/components/Button/Button';
import Logo from '@/components/Logo';
import SVGIcon from '@/components/SvgIcon/SvgIcon';
import MobileNav from '@/layout/Navbar/MobileNav';

import styles from './navbar.module.scss';

const Navbar = () => {
  const t = useTranslations('Menu');

  const NavButtons = ({ full }: { full?: boolean }) => (
    <>
      <Button full={full}> {t('bookDemo')}</Button>
      <Button
        full={full}
        type={'primary'}
        url={'/try-free'}
        iconAfter={<SVGIcon icon={'arrow-narrow-up-right'} />}
      >
        {t('tryFree')}
      </Button>
    </>
  );

  return (
    <nav className="sticky top-0 z-50 bg-main-white">
      <div className="mx-auto hidden max-w-7xl px-4  sm:block sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <div className="flex flex-1 items-center justify-start sm:items-stretch">
            <div className="flex shrink-0 items-center">
              <Logo />
            </div>
            <div className=" sm:ml-10">
              <div className="flex space-x-8">
                <div
                  className={classNames(
                    'flex h-20 items-center',
                    styles.sectionWrapper,
                  )}
                >
                  <Link
                    href={'/products'}
                    className={classNames(
                      styles.navItem,
                      'text-md py-1 h-[36px]',
                    )}
                  >
                    {t('products')}
                  </Link>

                  <div className={styles.section}>
                    <div
                      className={
                        'container flex gap-[--container-padding-desktop] p-[--container-padding-desktop]'
                      }
                    >
                      <div>
                        <div className={'p-6'}>Post-purchase</div>
                        <div className={'p-6'}>Post-purchase</div>
                      </div>
                      <div>
                        <div className={'h-full w-[1px] bg-[#CECFD1]'}></div>
                      </div>
                      <div>
                        <div
                          className={
                            'radius-[--radius-md] border-[--Component-colors-Components-Icons-Featured-icons-Modern-featured-icon-modern-border]'
                          }
                        >
                          121212
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className={classNames(
                    'flex h-20 items-center',
                    styles.sectionWrapper,
                  )}
                >
                  <Link
                    href={'/pricing'}
                    className={classNames(styles.navItem, 'text-md py-1')}
                  >
                    {t('pricing')}
                  </Link>
                </div>
                <div
                  className={classNames(
                    'flex h-20 items-center',
                    styles.sectionWrapper,
                  )}
                >
                  <Link
                    href={'/partners'}
                    className={classNames(styles.navItem, 'text-md py-1')}
                  >
                    {t('partners')}
                  </Link>
                </div>
                <div
                  className={classNames(
                    'flex h-20 items-center',
                    styles.sectionWrapper,
                  )}
                >
                  <Link
                    href={'/resources'}
                    className={classNames(styles.navItem, 'text-md py-1')}
                  >
                    {t('resources')}
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className={'hidden space-x-3 sm:block'}>
            <NavButtons />
          </div>
        </div>
      </div>

      {/* 移动端 */}
      <MobileNav title={t('products')} buttons={<NavButtons full />} />
    </nav>
  );
};

export default Navbar;
