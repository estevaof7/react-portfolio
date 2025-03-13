import { LanguageProvider } from '@/view-model/language';
import Footer from './components/footer';
import NavBar from './components/nav-bar';
import Session1 from './components/session1';
import Session2 from './components/session2';

export default function Home() {
  // PASSAR PARA GITHUB E, DEPOIS, PARA VERCEL E VERIFICAR SE LÍNGUA FUNCIONOU
  //

  return (
    <LanguageProvider>
      <NavBar />
      <Session1 />
      <Session2 />
      <Footer />
    </LanguageProvider>
  );
}
