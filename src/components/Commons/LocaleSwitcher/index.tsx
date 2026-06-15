import { useTranslations } from 'next-intl';
import { ChangeEvent, useCallback, useTransition } from 'react';
import { useRouter } from 'next/router';

export default function LocaleSwitcher() {
  const t = useTranslations('LocaleSwitcher');

  const { replace, locale, locales, pathname, query, asPath } = useRouter();
  const [isPending, startTransition] = useTransition();
  const onSelectChange = useCallback(
    (event: ChangeEvent<HTMLSelectElement>) => {
      const nextLocale = event.target.value;
      startTransition(() => {
        replace({ pathname, query }, asPath, { locale: nextLocale });
      });
    },
    [replace, pathname, query, asPath],
  );

  return (
    <select name="" id={t('label')} defaultValue={locale} disabled={isPending} onChange={onSelectChange}>
      {(locales ?? []).map((cur) => (
        <option key={cur} value={cur}>
          {t('locale', { locale: cur })}
        </option>
      ))}
    </select>
  );
}
