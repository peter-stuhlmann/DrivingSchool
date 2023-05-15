import { Inter } from 'next/font/google';

import StyledComponentsRegistry from './sc-registry';
import Header from './components/Header';
import Footer from './components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Fahrschule StreetMasters',
  description:
    'Mit individueller Betreuung und modernen Lehrmethoden begleitet dich Fahrschule StreetMasters auf dem Weg zu Deinem Führerschein. Melde dich noch heute an!',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body
        className={inter.className}
        style={{ margin: 0, overflowX: 'hidden' }}
      >
        <StyledComponentsRegistry>
          <Header />
          {children}
          <Footer />
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
