import { MessageSquare, List, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function CTA() {
  return (
    <section className='py-16 sm:py-24 bgDark'>
      <div className='max-w-5xl mx-auto px-4 sm:px-6 lg:px-8'>
        <p className='text-xs font-semibold tracking-[0.2em] uppercase mb-6 textPrimary'>
          Get Started
        </p>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3'>
          <div className='sm:col-span-2 rounded-2xl p-8 flex flex-col justify-between bg shadowM border border'>
            <h2 className='text-3xl sm:text-4xl font-bold leading-tight text'>
              Ready to Get
              <br />
              <span className='textPrimary'>Started?</span>
            </h2>
            <p className='mt-4 text-sm leading-relaxed max-w-md textMuted'>
              Add Owen to your WhatsApp in under a minute. Enter your number, get the pairing code,
              and start using 100+ commands instantly.
            </p>
          </div>


          <div className='rounded-2xl p-8 flex flex-col justify-between bgDark shadowM'>
            <span className='text-xs font-semibold tracking-widest uppercase textPrimaryForeground/70'>
              Commands
            </span>
            <div>
              <p className='text-5xl leading-none font-black textSecondary'>100+</p>
              <p className='text-sm mt-1 textPrimaryForeground/70'>available instantly</p>
            </div>
          </div>

          <div className='rounded-2xl p-8 flex flex-col justify-between bg shadowM border border'>
            <div>
              <div className='w-10 h-10 rounded-xl flex items-center justify-center mb-4 bgPrimary'>
                <MessageSquare className='w-5 h-5 textPrimaryForeground' />
              </div>
              <p className='text-xs font-semibold tracking-widest uppercase mb-1 textMuted'>
                Step 1
              </p>
              <p className='font-semibold text'>Get your pairing code</p>
            </div>

            <Button
              asChild
              variant='outline'
              className='mt-6 w-full shadowS hover:shadowM border hover:borderHover textMuted hover:text transition-all duration-200'
            >
              <a
                href='https://owen-production-28fc.up.railway.app/'
                target='_blank'
                rel='noopener noreferrer'
              >
                <MessageSquare className='w-4 h-4 mr-2' />
                Connect WhatsApp
              </a>
            </Button>
          </div>

          <div className='rounded-2xl p-8 flex flex-col justify-between bg shadowM border border'>
            <div>
              <div className='w-10 h-10 rounded-xl flex items-center justify-center mb-4 bgLight shadowS border border'>
                <List className='w-5 h-5 textMuted' />
              </div>
              <p className='text-xs font-semibold tracking-widest uppercase mb-1 textMuted'>
                Step 2
              </p>
              <p className='font-semibold text'>Browse all commands</p>
            </div>
            <Button asChild variant='outline' className='mt-6 w-full shadowS hover:shadowM'>
              <a href='#commands'>View All Commands</a>
            </Button>
          </div>

          <div className='rounded-2xl p-8 flex flex-col justify-center items-start bgLight shadowS border border'>
            <p className='text-4xl font-black leading-none text'>&lt; 1</p>
            <p className='text-lg font-semibold mt-1 textPrimary flex items-center gap-2'>
              <Zap className='w-4 h-4 fill-current' />
              minute setup
            </p>
            <p className='text-xs mt-3 leading-relaxed textMuted'>
              No app install required. Works entirely inside WhatsApp.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
