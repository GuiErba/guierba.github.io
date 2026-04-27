import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Guilherme Erba - Software Engineer',
  description: 'Retro Portfolio',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
