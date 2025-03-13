'use client';

import { useLanguage } from '@/view-model/language';

export default function Session2() {
  const { language } = useLanguage();

  return <section>sessão 2 + {language}</section>;
}
