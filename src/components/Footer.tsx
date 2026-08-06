export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='bgDark border-t py-10'>
      <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center'>
          <p className='text-sm textMuted'>{currentYear} Owen Bot. All rights reserved.</p>
          <p className='text-sm textMuted mt-2'>Made with love by xodobyte</p>
        </div>
      </div>
    </footer>
  );
}
