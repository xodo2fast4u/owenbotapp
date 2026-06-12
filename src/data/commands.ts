export interface CommandCategory {
  id: string;
  name: string;
  description: string;
  commands: string[];
  icon: string;
}

export const commandCategories: CommandCategory[] = [
  {
    id: 'entertainment',
    name: 'Entertainment',
    description: 'Fun commands to keep your group entertained',
    commands: [
      'roast',
      'jokes',
      'rizz',
      'trivia',
      'dare',
      'truth',
      'wouldyourather',
      'compliment',
      'riddle',
      'fact',
      'hug',
      'kiss',
      'slap',
      'beer',
      'wine',
      'howhot',
    ],
    icon: 'entertainment',
  },
  {
    id: 'ai',
    name: 'AI Chat',
    description: 'Powered by ChatGPT for intelligent conversations',
    commands: ['chatgpt'],
    icon: 'ai',
  },
  {
    id: 'downloader',
    name: 'Media Downloader',
    description: 'Download videos and music from popular platforms',
    commands: ['play', 'igdl', 'tiktok'],
    icon: 'download',
  },
  {
    id: 'gambling',
    name: 'Casino Games',
    description: 'Test your luck with virtual gambling games',
    commands: ['blackjack', 'coinflip', 'dice', 'race', 'scratch', 'slots', 'crash', 'cashout'],
    icon: 'gambling',
  },
  {
    id: 'economy',
    name: 'Economy System',
    description: 'Build your virtual empire with jobs, businesses, and heists',
    commands: [
      'work',
      'beg',
      'invest',
      'rob',
      'hack',
      'heist',
      'mybiz',
      'workbiz',
      'loan',
      'mission',
      'give',
    ],
    icon: 'economy',
  },
  {
    id: 'group',
    name: 'Group Management',
    description: 'Powerful admin tools for group management',
    commands: [
      'kick',
      'add',
      'promote',
      'demote',
      'tagall',
      'hidetag',
      'link',
      'groupinfo',
      'closegroup',
      'opengroup',
    ],
    icon: 'group',
  },
  {
    id: 'tools',
    name: 'Utility Tools',
    description: 'Useful utilities for everyday tasks',
    commands: [
      'translate',
      'weather',
      'define',
      'calculate',
      'lyrics',
      'wikipedia',
      'movie',
      'anime',
      'manga',
      'wallpaper',
      'tts',
      'password',
      'shorten',
    ],
    icon: 'tools',
  },
  {
    id: 'maker',
    name: 'Sticker Maker',
    description: 'Create custom stickers and images',
    commands: ['sticker', 'brat', 'bratvid', 'qc-sticker', 'remini'],
    icon: 'maker',
  },
  {
    id: 'pokemon',
    name: 'Pokemon Game',
    description: 'Catch, train, and battle Pokemon',
    commands: ['pokemon', 'pinv', 'pfight', 'ptrain', 'pbuy', 'psell'],
    icon: 'pokemon',
  },
  {
    id: 'stalker',
    name: 'Social Lookup',
    description: 'Look up profiles on social media platforms',
    commands: ['twitter', 'tiktok', 'insta', 'youtube', 'github'],
    icon: 'stalker',
  },
  {
    id: 'profile',
    name: 'Profile System',
    description: 'Track your stats, XP, and coins',
    commands: ['profile', 'coin', 'lb', 'claim', 'autolevel'],
    icon: 'profile',
  },
  {
    id: 'info',
    name: 'Bot Information',
    description: 'Get information about the bot and server',
    commands: ['menu', 'ping', 'uptime', 'info', 'speed', 'donate'],
    icon: 'info',
  },
];

export const getTotalCommands = (): number => {
  return commandCategories.reduce((acc, cat) => acc + cat.commands.length, 0);
};
