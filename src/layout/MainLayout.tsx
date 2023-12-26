import type { ReactNode } from 'react';

import Footer from '@/layout/Footer/Footer';
import Navbar from '@/layout/Navbar/Navbar';

interface MainLayoutProps {
  children?: ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
