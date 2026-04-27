import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import { draftMode } from 'next/headers';
import { VisualEditing } from 'next-sanity/visual-editing';
import { DisableDraftMode } from '@/components/DisableDraftMode';
import { Footer } from '@/components/Footer';
import { Navbar } from '@/components/Navbar';
import './globals.css';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
});

const jetbrainsMono = JetBrains_Mono({
  variable: '--font-jetbrains-mono',
  subsets: ['latin'],
  weight: ['400', '500'],
});

export const metadata: Metadata = {
  title: 'Guilherme Erba — Staff Software Engineer',
  description:
    'Staff Software Engineer specializing in distributed systems, software architecture, and high-performance backend engineering. 8+ years designing systems at scale.',
  keywords: [
    'software engineer',
    'distributed systems',
    'software architecture',
    'backend engineer',
    'staff engineer',
    'Go',
    'Node.js',
    'Kafka',
    'microservices',
  ],
  authors: [{ name: 'Guilherme Erba' }],
  openGraph: {
    type: 'website',
    url: 'https://guilhermeerba.dev',
    title: 'Guilherme Erba — Staff Software Engineer',
    description:
      '8+ years engineering distributed systems, scalable APIs, and high-performance architectures. I solve the hard problems before they become incidents.',
    siteName: 'Guilherme Erba',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Guilherme Erba — Staff Software Engineer',
    description:
      '8+ years engineering distributed systems, scalable APIs, and high-performance architectures. I solve the hard problems before they become incidents.',
    creator: '@guilhermeerba',
  },
  other: {
    'theme-color': '#080808',
  },
};

export default async function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="bg-background text-foreground font-sans antialiased">
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
        {(await draftMode()).isEnabled && (
          <>
            <VisualEditing />
            <DisableDraftMode />
          </>
        )}
      </body>
    </html>
  );
}
