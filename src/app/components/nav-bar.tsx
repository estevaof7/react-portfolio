'use client';

import { useLanguage } from '@/view-model/language';

export default function NavBar() {
  const { language } = useLanguage();

  return <nav>nav-bar + {language}</nav>;
}
