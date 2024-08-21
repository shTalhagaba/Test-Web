import './globals.css';
import { ReactNode } from 'react';
import { ItemProvider } from '../context/ItemContext';

export const metadata = {
  title: 'My Web App',
  description: 'A small web application built with Next.js',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ItemProvider>{children}</ItemProvider>
      </body>
    </html>
  );
}
