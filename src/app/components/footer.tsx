'use client';

import { useLanguage } from '@/view-model/language';

export default function Footer() {
  const { language } = useLanguage();

  return <footer>footer + {language}</footer>;
}
