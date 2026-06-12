import { type ReactNode, useState } from 'react';
import { commandCategories, type CommandCategory } from '../data/commands';
import {
  Gamepad2,
  Cpu,
  Download,
  Dices,
  Coins,
  Users,
  Settings,
  Image as ImageIcon,
  Search,
  User,
  Info,
} from 'lucide-react';

const getIcon = (iconName: string) => {
  const icons: Record<string, any> = {
    entertainment: Gamepad2,
    ai: Cpu,
    download: Download,
    gambling: Dices,
    economy: Coins,
    group: Users,
    tools: Settings,
    maker: ImageIcon,
    stalker: Search,
    profile: User,
  };
  const IconComponent = icons[iconName] || Info;
  return <IconComponent className='w-5 h-5' />;
};

function CategoryIcon({ icon }: { icon: string }) {
  return getIcon(icon);
}

function FeatureCard({
  category,
  isOpen,
  onToggle,
}: {
  category: CommandCategory;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className='self-start bgLight rounded-xl border border overflow-hidden hover:borderHover transition-all shadowS hover:shadowM'>
      <button
        onClick={onToggle}
        className='w-full p-4 flex items-center justify-between text-left cursor-pointer'
        aria-expanded={isOpen}
      >
        <div className='flex items-center gap-3'>
          <div className='w-10 h-10 rounded-lg bg border border textPrimary flex items-center justify-center shrink-0'>
            <CategoryIcon icon={category.icon} />
          </div>
          <div>
            <h3 className='font-semibold text'>{category.name}</h3>
            <p className='text-sm textMuted'>{category.commands.length} commands</p>
          </div>
        </div>
        <svg
          className={`w-5 h-5 textMuted transition-transform shrink-0 ${isOpen ? 'rotate-180' : ''}`}
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
        >
          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M19 9l-7 7-7-7' />
        </svg>
      </button>

      {isOpen && (
        <div className='px-4 pb-4 pt-0'>
          <p className='text-sm textMuted mb-3'>{category.description}</p>
          <div className='flex flex-wrap gap-2'>
            {category.commands.map((cmd) => (
              <span
                key={cmd}
                className='inline-block px-2 py-1 bg border border text text-xs font-mono rounded'
              >
                .{cmd}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export function Features() {
  return (
    <section id='features' className='py-16 sm:py-24 bg'>
      <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-12'>
          <h2 className='text-3xl sm:text-4xl font-bold text mb-4'>Packed with Features</h2>
          <p className='text-lg textMuted max-w-2xl mx-auto'>
            Owen comes with everything you need to make your WhatsApp groups more fun and
            productive.
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12'>
          <div className='md:col-span-2 bgDark rounded-2xl p-6 sm:p-8 shadowL'>
            <div className='flex flex-col h-full'>
              <div className='w-12 h-12 rounded-xl bgPrimaryForeground/10 flex items-center justify-center mb-4'>
                <Cpu className='w-6 h-6 textPrimaryForeground' />
              </div>

              <h3 className='text-xl sm:text-2xl font-bold mb-2 textPrimary'>
                AI-Powered Conversations
              </h3>

              <p className='textMuted flex-1'>
                Chat with ChatGPT directly in your WhatsApp. Get answers, have conversations, and
                let AI assist you with anything you need.
              </p>
            </div>
          </div>

          <div className='bgLight rounded-2xl p-6 border border shadowS hover:shadowM transition-shadow'>
            <div className='w-12 h-12 rounded-xl bg border border textPrimary flex items-center justify-center mb-4'>
              <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z'
                />
              </svg>
            </div>
            <h3 className='text-lg font-bold text mb-2'>Privacy First</h3>
            <p className='text-sm textMuted'>
              Your data stays yours. We do not store messages or personal information beyond what is
              needed for the bot to function.
            </p>
          </div>

          <div className='bgLight rounded-2xl p-6 border border shadowS hover:shadowM transition-shadow'>
            <div className='w-12 h-12 rounded-xl bg border border textPrimary flex items-center justify-center mb-4'>
              <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M13 10V3L4 14h7v7l9-11h-7z'
                />
              </svg>
            </div>
            <h3 className='text-lg font-bold text mb-2'>Lightning Fast</h3>
            <p className='text-sm textMuted'>
              Optimized for speed with anti-spam protection and cooldown management to keep
              responses quick.
            </p>
          </div>

          <div className='bgLight rounded-2xl p-6 border border shadowS hover:shadowM transition-shadow'>
            <div className='w-12 h-12 rounded-xl bg border border textPrimary flex items-center justify-center mb-4'>
              <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z'
                />
              </svg>
            </div>
            <h3 className='text-lg font-bold text mb-2'>Always Online</h3>
            <p className='text-sm textMuted'>
              Hosted on reliable infrastructure. Owen is available 24/7, ready to respond whenever
              you need.
            </p>
          </div>

          <div className='bgLight rounded-2xl p-6 border border shadowS hover:shadowM transition-shadow'>
            <div className='w-12 h-12 rounded-xl bg border border textPrimary flex items-center justify-center mb-4'>
              <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                />
              </svg>
            </div>
            <h3 className='text-lg font-bold text mb-2'>Completely Free</h3>
            <p className='text-sm textMuted'>
              All features are free to use. No hidden charges, no premium tiers, no limits.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Commands() {
  const [openCategories, setOpenCategories] = useState<Set<string>>(new Set());

  const toggleCategory = (id: string) => {
    const newOpen = new Set(openCategories);
    if (newOpen.has(id)) {
      newOpen.delete(id);
    } else {
      newOpen.add(id);
    }
    setOpenCategories(newOpen);
  };

  return (
    <section id='commands' className='py-16 sm:py-24 bgDark'>
      <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-12'>
          <h2 className='text-3xl sm:text-4xl font-bold text mb-4'>Command Categories</h2>
          <p className='text-lg textMuted max-w-2xl mx-auto'>
            Click on any category to see all available commands. Every command starts with a dot.
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
          {commandCategories.map((category) => (
            <FeatureCard
              key={category.id}
              category={category}
              isOpen={openCategories.has(category.id)}
              onToggle={() => toggleCategory(category.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
