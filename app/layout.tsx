import "./styles/globals.css";
import Header from "./components/header";
import { Roboto } from 'next/font/google';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'], // Ajouter les variantes de poids souhaitées
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className={roboto.className}>
        <Header />
        <main className="container">{children}</main>
      </body>
    </html>
  );
}

