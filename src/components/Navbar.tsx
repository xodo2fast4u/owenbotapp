import { Menu, Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from '@/components/ui/sheet';

interface NavbarProps {
  isDark: boolean;
  toggleTheme: () => void;
}

export function Navbar({ isDark, toggleTheme }: NavbarProps) {
  const navLinks = [
    { href: '#features', label: 'Features' },
    { href: '#commands', label: 'Commands' },
    { href: '#testimonials', label: 'Testimonials' },
    { href: '#faq', label: 'FAQ' },
  ];

  const Logo = () => (
    <a href='#' className='flex items-center gap-2.5'>
      <div className='w-8 h-8 rounded-lg bgPrimary flex items-center justify-center shadowS'>
        <span className='textPrimaryForeground font-bold text-sm'>O</span>
      </div>
      <span className='font-semibold text text-lg tracking-tight'>Owen</span>
    </a>
  );

  return (
    <nav className='fixed top-0 left-0 right-0 z-50 bgLight/75 backdrop-blur-xl border-b border'>
      <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between h-16'>
          <Logo />

          <div className='hidden md:flex items-center gap-8'>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className='textMuted hover:text text-sm font-medium transition-colors'
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className='hidden md:flex items-center gap-3'>
            <Button
              variant='outline'
              size='icon'
              onClick={toggleTheme}
              className='rounded-lg bgRaised border shadowS'
            >
              {isDark ? <Sun className='h-4 w-4' /> : <Moon className='h-4 w-4' />}
            </Button>
            <Button
              asChild
              className='bgPrimary textPrimaryForeground shadowS hover:shadowM hover:bgPrimaryHover transition-all rounded-lg px-5 h-9 font-medium'
            >
              <a
                href='https://owen-panel.up.railway.app/'
                target='_blank'
                rel='noopener noreferrer'
              >
                Get Started
              </a>
            </Button>
          </div>

          <div className='md:hidden flex items-center gap-2'>
            <Button
              variant='outline'
              size='icon'
              onClick={toggleTheme}
              className='rounded-lg bgRaised border shadowS'
            >
              {isDark ? <Sun className='h-4 w-4' /> : <Moon className='h-4 w-4' />}
            </Button>

            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant='outline'
                  size='icon'
                  className='rounded-lg bgRaised border shadowS'
                >
                  <Menu className='h-5 w-5' />
                </Button>
              </SheetTrigger>
              <SheetContent side='right' className='bgLight border-l border'>
                <SheetHeader className='text-left'>
                  <SheetTitle>
                    <Logo />
                  </SheetTitle>
                </SheetHeader>
                <div className='flex flex-col gap-6 mt-8 px-4'>
                  {navLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      className='textMuted hover:text text-lg font-medium transition-colors'
                    >
                      {link.label}
                    </a>
                  ))}
                  <Button
                    asChild
                    className='w-full bgPrimary textPrimaryForeground rounded-lg h-11 font-medium'
                  >
                    <a
                      href='https://owen-panel.up.railway.app/'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      Get Started
                    </a>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
