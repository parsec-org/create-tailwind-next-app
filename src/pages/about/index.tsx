import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { GetStaticPropsContext } from 'next';
import { LocaleSwitcher } from '@/components/Commons';

const AboutPage = () => {
  const t = useTranslations('About');

  return (
    <div className="flex min-h-screen flex-col items-center justify-between gap-12 p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-end font-mono text-sm lg:flex">
        <LocaleSwitcher />
      </div>
      <div>{t('title')}</div>
      <div>{t('description')}</div>

      <Link href={'/'}>{t('back-to-home')}</Link>
    </div>
  );
};

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      messages: (await import(`@/locales/${locale}.json`)).default,
    },
  };
}

export default AboutPage;
