import type {Metadata} from 'next';
import './globals.css';
import { ThemeProvider } from '@/components/ThemeProvider';
import { Preloader } from '@/components/Preloader';

export const metadata: Metadata = {
  title: 'AI Bloom | Leading Enterprise AI Orchestration Platform',
  description: 'AI Bloom is the future of neural orchestration, providing zero-latency AI agents and scalable infrastructure for modern enterprises.',
  keywords: ['AI', 'Artificial Intelligence', 'Neural Networks', 'Machine Learning', 'Enterprise AI', 'Edge Compute'],
  authors: [{ name: 'Bloom AI Labs' }],
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
  openGraph: {
    title: 'AI Bloom | The Intelligent AI Platform',
    description: 'Synthesize Intelligence with AI Bloom. Production-ready AI agents for the modern enterprise.',
    type: 'website',
    url: 'https://aibloom.io',
    siteName: 'AI Bloom',
  },
  icons: {
    icon: 'data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 40 40%22 fill=%22none%22><circle cx=%2220%22 cy=%2220%22 r=%2218%22 stroke=%22%239F57FF%22 stroke-width=%222%22 fill=%22%239F57FF%22 fill-opacity=%220.1%22/><path d=%22M20 10C14.4772 10 10 14.4772 10 20C10 25.5228 14.4772 30 20 30C25.5228 30 30 25.5228 30 20C30 14.4772 25.5228 10 20 10ZM20 26C16.6863 26 14 23.3137 14 20C14 16.6863 16.6863 14 20 14C23.3137 14 26 16.6863 26 20C26 23.3137 23.6863 26 20 26Z%22 fill=%22%239F57FF%22/><circle cx=%2220%22 cy=%2220%22 r=%223%22 fill=%22%23FF47D3%22/><path d=%22M20 4V8M20 32V36M4 20H8M32 20H36%22 stroke=%22%23FF47D3%22 stroke-width=%222%22 stroke-linecap=%22round%22/></svg>',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased bg-background text-foreground overflow-x-hidden">
        <ThemeProvider>
          <Preloader />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}