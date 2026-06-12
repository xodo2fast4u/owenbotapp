import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';

const testimonials = [
  {
    name: 'Alex M.',
    role: 'Group Admin',
    content:
      'Owen has transformed how we manage our study group. The tagall and hidetag commands are lifesavers for announcements.',
  },
  {
    name: 'Sarah K.',
    role: 'Community Manager',
    content:
      'The entertainment commands keep our community active. The trivia and wouldyourather games are favorites.',
  },
  {
    name: 'Mike R.',
    role: 'Music Enthusiast',
    content:
      'The play command is incredible. I can share music with my group instantly without leaving WhatsApp.',
  },
  {
    name: 'Priya S.',
    role: 'Casual User',
    content:
      'I use the AI chat feature daily. It is like having a smart assistant right in my pocket.',
  },
  {
    name: 'James T.',
    role: 'Game Lover',
    content:
      'The economy and gambling games are addictive. My friends and I compete on the leaderboard daily.',
  },
  {
    name: 'Lisa W.',
    role: 'Content Creator',
    content:
      'The sticker maker and media downloader tools save me hours. Essential for anyone creating content.',
  },
];

export function Testimonials() {
  return (
    <section id='testimonials' className='py-16 sm:py-24 bg'>
      <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-12'>
          <h2 className='text-3xl sm:text-4xl font-bold text mb-4'>Loved by Users</h2>
          <p className='text-lg textMuted max-w-2xl mx-auto'>
            See what people are saying about Owen.
          </p>
        </div>

        <Carousel
          opts={{
            align: 'start',
            loop: true,
          }}
          className='w-full'
        >
          <CarouselContent className='-ml-4'>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className='pl-4 md:basis-1/2 lg:basis-1/3'>
                <div className='h-full'>
                  <Card className='border shadowS hover:shadowM transition-shadow h-full'>
                    <CardContent className='p-6'>
                      <div className='flex items-center gap-3 mb-4'>
                        <div className='w-10 h-10 rounded-full bg border border textPrimary flex items-center justify-center font-semibold'>
                          {testimonial.name.charAt(0)}
                        </div>
                        <div>
                          <div className='font-medium text'>{testimonial.name}</div>
                          <div className='text-sm textMuted'>{testimonial.role}</div>
                        </div>
                      </div>
                      <p className='textMuted text-sm leading-relaxed'>"{testimonial.content}"</p>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <div className='flex justify-center gap-4 mt-8'>
            <CarouselPrevious className='static translate-y-0' />
            <CarouselNext className='static translate-y-0' />
          </div>
        </Carousel>
      </div>
    </section>
  );
}
