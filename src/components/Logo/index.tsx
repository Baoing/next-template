import { AppConfig } from '@/utils/AppConfig';

type LogoProps = {
  theme?: 'dark' | 'light';
};

export default function Logo(props: LogoProps) {
  const { theme = 'dark' } = props;

  return (
    <a href="/">
      <img
        className="h-8 w-auto"
        src={`/assets/images/Logo-${theme}.svg`}
        alt={AppConfig.site_name}
      />
    </a>
  );
}
