'use client';

import { useLanguage } from '@/view-model/language';

export default function Session1() {
  const { language } = useLanguage();

  return <section>sessão 1 + {language}</section>;
}
