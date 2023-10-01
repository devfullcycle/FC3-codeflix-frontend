export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div
      className=' bg-cover bg-center bg-no-repeat text-white opacity-90 scrollbar-hide'
      style={{ backgroundImage: 'url(/background.jpg)' }}
    >
      <div className='flex min-h-screen flex-col items-center justify-center py-2'>
        {children}
      </div>
    </div>
  );
}
