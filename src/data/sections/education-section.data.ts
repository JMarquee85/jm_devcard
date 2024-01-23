import type { EducationSection } from '@/types/sections/education-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { website } from '../helpers/links';

const educationSectionData = {
  config: {
    title: 'Education',
    slug: 'education',
    icon: 'fa6-solid:graduation-cap',
    visible: true,
  },
  diplomas: [
    {
      title: 'Masters, Music Performance',
      institution: 'William Paterson University',
      image: import('@/assets/logos/wp.png'),
      dates: [new Date('2015.09'), new Date('2022.05')],
      description: 'Masters in Music Performance with a focus in Jazz Studies.',
      links: [website({ url: 'https://wpunj.edu' })],
    },
    {
      title: 'Bachelors, Music Performance',
      institution: 'Eastern Illinois University',
      image: import('@/assets/logos/eiu.png'),
      dates: [new Date('2004.09'), new Date('2010.05')],
      description: "Bachelor's degree in Music Performance with a focus in Jazz Studies.",
      links: [website({ url: 'https://eiu.edu' })],
    },
  ],
} as const satisfies ReadonlyDeep<EducationSection>;

export default educationSectionData;
