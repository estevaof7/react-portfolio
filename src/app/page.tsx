import { LanguageProvider } from '@/view-model/language';
import Footer from './components/footer';
import NavBar from './components/nav-bar';
import Session1 from './components/session1';
import Session2 from './components/session2';

export default function Home() {
  // CORRIGI OS ERROS COM ESLINT E PRETTIER ... TENTAR DE NOVO PASSAR PARA VERCEL ... DEPOIS ... VERIFICAR SE LÍNGUA FUNCIONOU E CONTINUAR O PROJETO

  return (
    <LanguageProvider>
      <NavBar />
      <Session1 />
      <Session2 />
      <Footer />
    </LanguageProvider>
  );
}
