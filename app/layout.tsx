import "./styles/globals.css";
import Header from "./components/header";
import { Roboto } from 'next/font/google';
import { LanguageProvider } from '../context/languageContext';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'],
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
    <head>
      <title>Portfolio</title>
    </head>
    <html lang="fr">
      <body className={roboto.className}>
        <LanguageProvider>
          <Header />
          <main className="container">{children}</main>
        </LanguageProvider>
      </body>
    </html>
    </>
  );
}
