import { useTranslations, useLocale } from 'next-intl';
import { ChangeEvent, useCallback, useTransition } from 'react';
import { useParams, usePathname } from 'next/navigation';
import { useRouter } from 'next/router';

export default function LocaleSwitcher() {
  const t = useTranslations('LocaleSwitcher');

  const { replace, locale, locales } = useRouter();
  const pathname = usePathname();
  const params = useParams();
  const [isPending, startTransition] = useTransition();
  const onSelectChange = useCallback(
    (event: ChangeEvent<HTMLSelectElement>) => {
      const nextLocale = event.target.value;
      startTransition(() => {
        replace(
          // @ts-expect-error -- TypeScript will validate that only known `params`
          // are used in combination with a given `pathname`. Since the two will
          // always match for the current route, we can skip runtime checks.
          { pathname, params },
          {},
          { locale: nextLocale },
        );
      });
    },
    [replace, pathname, params, startTransition],
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
