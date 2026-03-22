import { type ReactNode } from "react";
import { commandCategories, type CommandCategory } from "../data/commands";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
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
} from "lucide-react";

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
  return <IconComponent className="w-5 h-5" />;
};

function CategoryIcon({ icon }: { icon: string }) {
  const iconMap: Record<string, ReactNode> = {
    entertainment: (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    ai: (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
    download: (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
        />
      </svg>
    ),
    gambling: (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
        />
      </svg>
    ),
    economy: (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    group: (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    ),
    tools: (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
    maker: (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
        />
      </svg>
    ),
    pokemon: (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    stalker: (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
    ),
    profile: (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
        />
      </svg>
    ),
    info: (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  };

  return iconMap[icon] || iconMap.info;
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
    <div className="self-start bg-bg-light rounded-xl border border-border overflow-hidden hover:border-border-hover transition-all shadow-s hover:shadow-m">
      <button
        onClick={onToggle}
        className="w-full p-4 flex items-center justify-between text-left cursor-pointer"
        aria-expanded={isOpen}
      >
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-bg border border-border text-primary flex items-center justify-center shrink-0">
            <CategoryIcon icon={category.icon} />
          </div>
          <div>
            <h3 className="font-semibold text-text">{category.name}</h3>
            <p className="text-sm text-text-muted">
              {category.commands.length} commands
            </p>
          </div>
        </div>
        <svg
          className={`w-5 h-5 text-text-muted transition-transform shrink-0 ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="px-4 pb-4 pt-0">
          <p className="text-sm text-text-muted mb-3">{category.description}</p>
          <div className="flex flex-wrap gap-2">
            {category.commands.map((cmd) => (
              <span
                key={cmd}
                className="inline-block px-2 py-1 bg-bg border border-border text-text text-xs font-mono rounded"
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
    <section id="features" className="py-16 sm:py-24 bg-bg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-text mb-4">
            Packed with Features
          </h2>
          <p className="text-lg text-text-muted max-w-2xl mx-auto">
            Owen comes with everything you need to make your WhatsApp groups
            more fun and productive.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          <div className="md:col-span-2 bg-primary rounded-2xl p-6 sm:p-8 shadow-l">
            <div className="flex flex-col h-full">
              <div className="w-12 h-12 rounded-xl bg-primary-foreground/10 flex items-center justify-center mb-4">
                <Cpu className="w-6 h-6 text-primary-foreground" />
              </div>

              <h3 className="text-xl sm:text-2xl font-bold mb-2 text-primary-foreground">
                AI-Powered Conversations
              </h3>

              <p className="text-primary-foreground/80 flex-1">
                Chat with ChatGPT directly in your WhatsApp. Get answers, have
                conversations, and let AI assist you with anything you need.
              </p>
            </div>
          </div>

          <div className="bg-bg-light rounded-2xl p-6 border border-border shadow-s hover:shadow-m transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-bg border border-border text-primary flex items-center justify-center mb-4">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-text mb-2">Privacy First</h3>
            <p className="text-sm text-text-muted">
              Your data stays yours. We do not store messages or personal
              information beyond what is needed for the bot to function.
            </p>
          </div>

          <div className="bg-bg-light rounded-2xl p-6 border border-border shadow-s hover:shadow-m transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-bg border border-border text-primary flex items-center justify-center mb-4">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-text mb-2">Lightning Fast</h3>
            <p className="text-sm text-text-muted">
              Optimized for speed with anti-spam protection and cooldown
              management to keep responses quick.
            </p>
          </div>

          <div className="bg-bg-light rounded-2xl p-6 border border-border shadow-s hover:shadow-m transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-bg border border-border text-primary flex items-center justify-center mb-4">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-text mb-2">Always Online</h3>
            <p className="text-sm text-text-muted">
              Hosted on reliable infrastructure. Owen is available 24/7, ready
              to respond whenever you need.
            </p>
          </div>

          <div className="bg-bg-light rounded-2xl p-6 border border-border shadow-s hover:shadow-m transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-bg border border-border text-primary flex items-center justify-center mb-4">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-text mb-2">
              Completely Free
            </h3>
            <p className="text-sm text-text-muted">
              All features are free to use. No hidden charges, no premium tiers,
              no limits.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Commands() {
  return (
    <section id="commands" className="py-16 sm:py-24 bg-bg-dark">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-text mb-4">
            Command Categories
          </h2>
          <p className="text-lg text-text-muted max-w-2xl mx-auto">
            Click on any category to see all available commands. Every command
            starts with a dot.
          </p>
        </div>

        {/* Using shadcn Accordion for smooth interactions */}
        <Accordion
          type="single"
          collapsible
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 items-start"
        >
          {commandCategories.map((category) => (
            <AccordionItem
              key={category.id}
              value={category.id}
              className="bg-bg-light rounded-xl border border-border px-4 shadow-s hover:shadow-m transition-all self-start"
            >
              <AccordionTrigger className="hover:no-underline py-4">
                <div className="flex items-center gap-3 text-left">
                  <div className="w-10 h-10 rounded-lg bg-bg border border-border text-primary flex items-center justify-center shrink-0">
                    {getIcon(category.icon)}
                  </div>
                  <div>
                    <h3 className="font-semibold text-text">{category.name}</h3>
                    <p className="text-xs text-text-muted">
                      {category.commands.length} commands
                    </p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pb-4">
                <p className="text-sm text-text-muted mb-4">
                  {category.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {category.commands.map((cmd) => (
                    <Badge
                      key={cmd}
                      variant="secondary"
                      className="font-mono font-normal bg-bg border-border text-text"
                    >
                      .{cmd}
                    </Badge>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
