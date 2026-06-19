import {
  Shield,
  Zap,
  Layers,
  Smile,
  Sparkles,
  Heart,
  Award,
  Globe,
  BookOpen,
  Bookmark,
  ChevronRight,
  Calendar,
} from 'lucide-react';
import type {
  CorePrinciple,
  WorkshopDay,
  EssentialBook,
  Benefit,
  FAQ,
  WorkshopOption,
} from './types';

export const CORE_PRINCIPLES: CorePrinciple[] = [
  {
    id: 'self-recovery',
    title: 'The Principle of Self-Recovery',
    subtitle: 'The Innate Healing Intelligence',
    description:
      'Every living organism possesses an extraordinary, inherent capacity to heal, balance, and regenerate itself. If a person has a burn, scratch, or localized ailment, the body immediately initiates sophisticated immunological and cellular repairs. Pranic Healing acts as a catalyst, dramatically accelerating this natural process by addressing the energy blueprint that guides physical form.',
    icon: Shield,
    accent: 'text-accent-teal',
    bgLight: 'bg-teal-50',
    aura: 'ambient-aura-teal',
  },
  {
    id: 'life-energy',
    title: 'The Principle of Life Energy',
    subtitle: 'Accelerating Systemic Vitality',
    description:
      'For physical or emotional healing to occur, vital life energy—known as Prana, Chi, or Ki—must be present in optimal concentration. By strategically channeling prana to depleted regions (and cleansing congested energy pathways), a trained practitioner elevates the energetic vibration of affected organs, encouraging cellular acceleration and rapid homeostasis.',
    icon: Zap,
    accent: 'text-gold',
    bgLight: 'bg-amber-50/50',
    aura: 'ambient-aura-gold',
  },
  {
    id: 'cleansing-energizing',
    title: 'Cleansing before Energizing',
    subtitle: 'The Golden Rule of Healing',
    description:
      'Energy healing consists of two distinct stages: Cleansing (Sweeping) and Energizing. You must remove "dirty" or depleted energy before administering fresh, potent prana. Energizing a congested area without thorough sweeping is like pouring fresh water into a dirty glass—it can cause stress or localized blockages. Cleanse first, then energize is the foundation of Master Choa Kok Sui\'s systematic approach.',
    icon: Layers,
    accent: 'text-secondary-purple',
    bgLight: 'bg-violet-50',
    aura: 'ambient-aura-indigo',
  },
];

export const WORKSHOP_CURRICULUM: WorkshopDay[] = [
  {
    day: 'Day One',
    title: 'Theoretical Foundations & Energetics Sensing',
    time: '9:00 AM - 6:00 PM',
    topics: [
      {
        title: 'The Science of the Aura',
        desc: 'Map the three layers of the energy body (the inner, outer, and health auras) that govern your systemic health.',
      },
      {
        title: 'Sensitizing Hand Chakras',
        desc: 'Perform structured exercises to awaken latent tactile nerve pathways, allowing you to scan and feel energy fluctuations.',
      },
      {
        title: 'Cleansing (Sweeping) Techniques',
        desc: 'Master hand movements to sweep away stagnant, heavy, or toxic energy blocks safely and hygienically from yourself and others.',
      },
      {
        title: 'Energizing with Clean Prana',
        desc: 'Learn to draw prana from fresh air, sunlight, and the earth, channeling it precisely into congested areas without self-depleting.',
      },
    ],
  },
  {
    day: 'Day Two',
    title: 'The 11 Major Chakras & Self-Mastery',
    time: '9:00 AM - 6:00 PM',
    topics: [
      {
        title: 'The 11 Major Chakras System',
        desc: 'Go beyond the simplified 7-chakra model. Explore the exact physiological and psychological controls of the 11 key centers of Choa Kok Sui teachings.',
      },
      {
        title: 'Distant & Self-Healing Protocols',
        desc: 'Acquire proven formulas to project energy boundaries over miles and heal chronic internal physical distress on your own body.',
      },
      {
        title: 'Introduction to Meditation on Twin Hearts',
        desc: 'Experience a highly advanced, non-sectarian meditation that flushes the emotional body with divine light, healing stress, anxiety, and depression.',
      },
      {
        title: 'Pranic Hygiene & Self-Care',
        desc: 'Understand spiritual hygiene protocols to prevent absorbing client distress, maintaining physical vitality as a practitioner.',
      },
    ],
  },
];

export const ESSENTIAL_BOOKS: EssentialBook[] = [
  {
    title: 'Miracles Through Pranic Healing',
    originalTitle:
      'Originally Published as "The Ancient Science and Art of Pranic Healing"',
    subtitle:
      'The seminal textbook written by Grand Master Choa Kok Sui. A systematic manual with 80+ step-by-step physical healing programs.',
    quote:
      '"Pranic Healing is not about performing magic. It is about working with the natural laws of energy that govern our physiological systems."',
    chapters: [
      'Sensing & scanning the aura',
      'Surgical sweeping of congestion',
      'Treating elementary ailments',
      'Chakra dynamics',
    ],
    badge: 'Core Manual',
    color: 'border-l-4 border-l-gold',
  },
  {
    title: 'Advanced Pranic Healing',
    originalTitle: 'Color Prana Applications & Formulas',
    subtitle:
      'A deeper scientific dive utilizing specific bio-synthetic color frequencies to accelerate recovery for more complex scenarios.',
    quote:
      '"Using color prana is like employing a specialist rather than a general practitioner—it targets cells with optimal harmonic resonance."',
    chapters: [
      'Sourcing color frequencies',
      'Rapid tissue regeneration',
      'Organ cleansing protocols',
      'Energy shield development',
    ],
    badge: 'Advanced Study',
    color: 'border-l-4 border-l-accent-teal',
  },
  {
    title: 'Pranic Psychotherapy',
    originalTitle: 'Tackling Emotional and Psychological Blocks',
    subtitle:
      'Bridging the physical and mental fields. Protocols to clear lifelong negative emotional scripts, heavy addiction currents, and severe stress.',
    quote:
      '"Thoughts and emotions are actual, tangible energy units. If left stagnant inside our chakras, they manifest as chronic mental distress."',
    chapters: [
      'Disintegrating emotional debris',
      'Anxiety & stress mitigation',
      'Overcoming mental exhaustion',
      'Belief system reprogramming',
    ],
    badge: 'Psychological Wellness',
    color: 'border-l-4 border-l-secondary-purple',
  },
];

export const BENEFITS_LIST: Benefit[] = [
  {
    title: 'Deep Stress & Burnout Resolution',
    desc: 'Practitioners learn to quickly swipe away negative thought-forms and emotional residue accumulated in high-stress work environments, bringing profound mental clarity.',
    icon: Smile,
  },
  {
    title: 'Accelerated Physical Recovery',
    desc: 'By feeding freshly harvested prana into depleted areas, you dramatically speed up the physiological healing cycles of injuries, minor ailments, and chronic conditions.',
    icon: Sparkles,
  },
  {
    title: 'Non-Sectarian Spiritual Hygiene',
    desc: 'Pranic Healing is structured as a science, not a belief system. It is fully compatible with, and respectful of, all cultural backgrounds and spiritual paths.',
    icon: Award,
  },
  {
    title: 'Distant Healing Capabilities',
    desc: 'Learn the exact physics and protocols required to scan, cleanse, and energize clients, loved ones, or children, even when they are situated in another city.',
    icon: Globe,
  },
  {
    title: 'Emotional Self-Mastery',
    desc: 'Soothe emotional blockages, overcome deeply seated anxiety, and build rich positive inner neural environments using Meditation on Twin Hearts.',
    icon: Heart,
  },
  {
    title: 'No Special Talents Required',
    desc: 'Our interactive 2-day workshop assumes zero pre-existing psychic abilities. If you can follow a cookbook, you can learn to sense and apply Pranic energy.',
    icon: Award,
  },
];

export const FAQS: FAQ[] = [
  {
    q: 'Do I need any special background or psychic abilities to learn Pranic Healing?',
    a: 'Absolutely not. Grand Master Choa Kok Sui systematically designed Pranic Healing to be a step-by-step, mechanical training curriculum. Anyone who can read, follow clear practical instructions, and possesses basic concentration can learn to scan, cleanse, and energize effectively during our structured 2-day session.',
  },
  {
    q: 'What is the main difference between Reiki and Pranic Healing?',
    a: 'While both are beautiful energy modalities, Pranic Healing is highly distinct in two key areas. First, Pranic Healing places extensive emphasis on "Cleansing" (or sweeping) before ever "Energizing." Second, Pranic Healing leverages a robust 11-chakra system (rather than the traditional 7) and uses specific, non-touch "colors of prana" for precise organ healing, acting as a highly detailed systematic protocol.',
  },
  {
    q: 'Is Pranic Healing a religion?',
    a: 'No. Pranic Healing is a non-denominational wellness science and educational framework. Our students and trainers include doctors, corporate executives, yoga instructors, Catholic priests, Buddhist practitioners, and engineers. It requires no conversion or belief—simply a willingness to experiment and observe results.',
  },
  {
    q: 'Is this workshop recognized globally, and can I practice?',
    a: 'Yes. Upon completing the 2-day Basic Pranic Healing Workshop, you receive an internationally accredited Certificate of Completion issued by the Institute for Inner Studies, Manila, founded by GMKS. This opens the gate for further advanced coursework in over 120 countries worldwide.',
  },
  {
    q: 'How does the Medical Disclaimer apply to daily wellness?',
    a: 'Pranic Healing is designed strictly as a complementary wellness system. It is aimed to accelerate natural biological healing, but is never intended to replace professional medical diagnosis, prescription medicines, or standard medical treatments. Serious ailments should always be monitored by high-quality licensed physicians.',
  },
];

export const WORKSHOP_OPTIONS: WorkshopOption[] = [
  {
    id: 'la-inperson',
    title: 'Level 1: Basic Pranic Healing (In-Person)',
    location: 'Los Angeles, CA — Wellness Sanctuary, Santa Monica',
    date: 'July 11–12, 2026',
    hours: '9:00 AM - 6:00 PM (Saturday & Sunday)',
    seatsLeft: 7,
    price: '$450 USD',
  },
  {
    id: 'nyc-inperson',
    title: 'Level 1: Basic Pranic Healing (In-Person)',
    location: 'New York City, NY — Mandarin Oriental Spiritual Salon',
    date: 'July 25–26, 2026',
    hours: '9:00 AM - 6:00 PM (Saturday & Sunday)',
    seatsLeft: 4,
    price: '$475 USD',
  },
  {
    id: 'global-live',
    title: 'Level 1: Basic Pranic Healing (Global Live Stream)',
    location: 'Virtual Classroom — Live Interactive HD Broadcast',
    date: 'August 08–09, 2026',
    hours: '9:30 AM - 5:30 PM EST',
    seatsLeft: 22,
    price: '$395 USD',
  },
];
