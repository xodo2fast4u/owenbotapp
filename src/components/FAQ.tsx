import { useState } from 'react';

const faqs = [
  {
    question: 'How do I add Owen to my WhatsApp?',
    answer:
      'Visit our dashboard at owen-cfme.onrender.com, enter your phone number, and click "Get Pairing Code". Enter the code in your WhatsApp linked devices settings to connect.',
  },
  {
    question: 'Is Owen free to use?',
    answer:
      'Yes, Owen is completely free. All features and commands are available to everyone without any charges or premium tiers.',
  },
  {
    question: 'What data does Owen collect?',
    answer:
      'Owen only stores minimal data required for functionality: your user ID for the economy system, XP tracking, and command cooldowns. We do not read or store your private messages.',
  },
  {
    question: 'How do I use commands?',
    answer:
      'All commands start with a dot. For example, type ".menu" to see all available commands, ".ping" to check if the bot is online, or ".chatgpt your question" to chat with AI.',
  },
  {
    question: 'Can I use Owen in group chats?',
    answer:
      'Yes, Owen works in both private chats and group chats. Group admins get access to additional management commands like kick, promote, and tagall.',
  },
  {
    question: 'Why is the bot not responding?',
    answer:
      'Check if the bot is online using ".ping". If there is no response, the bot might be undergoing maintenance. Anti-spam protection may also delay responses if you send commands too quickly.',
  },
  {
    question: 'How does the economy system work?',
    answer:
      'Use ".work" or ".beg" to earn coins. Spend them in games like blackjack, slots, and dice. Build a business with the biz commands, or rob other users with ".rob". Check your balance with ".coin".',
  },
  {
    question: 'How can I support Owen?',
    answer:
      'Type ".donate" in chat to see how you can support the development of Owen. Your contributions help keep the bot running and improve its features.',
  },
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className='w-full py-4 flex items-center justify-between text-left cursor-pointer'
        aria-expanded={isOpen}
      >
        <span className='font-medium text pr-4'>{question}</span>
        <svg
          className={`w-5 h-5 textMuted shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
        >
          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M19 9l-7 7-7-7' />
        </svg>
      </button>
      {isOpen && (
        <div className='pb-4 pr-12'>
          <p className='textMuted text-sm leading-relaxed'>{answer}</p>
        </div>
      )}
    </div>
  );
}

export function FAQ() {
  return (
    <section id='faq' className='py-16 sm:py-24 bgDark'>
      <div className='max-w-3xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-12'>
          <h2 className='text-3xl sm:text-4xl font-bold text mb-4'>Frequently Asked Questions</h2>
          <p className='text-lg textMuted'>Everything you need to know about Owen.</p>
        </div>

        <div className='bgLight rounded-xl border border shadowS px-6'>
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
}
