import './globals.css';

export const metadata = {
  title: 'CodeFlix - Watch',
  description: 'Watch your favorite movies and TV shows.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className='bg-[#141414] text-white scrollbar-hide'>{children}</body>
    </html>
  );
}
