import './globals.css';

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-US">
      <body className="antialiased selection:bg-zinc-700 selection:text-white">
        {children}
      </body>
    </html>
  );
}
