import type { MainSection } from '@/types/sections/main-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { github, linkedin } from '../helpers/links';

const mainSectionData = {
  config: {
    icon: 'fa6-solid:user',
    title: 'Profile',
    slug: 'profile',
    visible: true,
  },
  image: import('@/assets/jm_photo.jpg'),
  fullName: 'Josh Marcus',
  role: 'Full Stack Software Engineer',
  details: [
    // { label: 'Phone', value: '605 475 6961', url: 'tel:605 475 6961' },
    { label: 'Email', value: 'joshmarcus85@gmail.com', url: 'mailto:joshmarcus85@gmail.com' },
    { label: 'From', value: 'El Paso, TX' },
    // { label: 'Salary range', value: '18 000 - 25 000 PLN' },
  ],
  pdfDetails: [
    // { label: 'Phone', value: '605 475 6961' },
    { label: 'Email', value: 'joshmarcus85@gmail.com' },
    { label: 'LinkedIn', value: '/in/josh-marcus-605085217/', url: 'https://linkedin.com' },
    { label: 'GitHub', value: '/JMarquee85', url: 'https://github.com' },
    { label: 'Website', value: 'joshmarcusmusic.com', url: '/', fullRow: true },
  ],
  description:
    'Experienced and versatile Software Engineer with a background in Platform Engineering, DevOps, System Administration and IT. Comfortable and effective in almost any environment. Experience in healthcare, government and other highly regulated and secured environments. Experience both as an individual contributor and as a manager. Also, a musician and composer.',
  tags: [{ name: 'Open for freelance' }, { name: 'Management experience' }, { name: 'Multiple technical disciplines' }],
  action: {
    label: 'Download Resume',
    url: '/cv.pdf',
    downloadedFileName: 'JoshMarcusResume.pdf',
  },
  links: [
    github({ url: 'https://github.com/JMarquee85' }),
    linkedin({ url: 'https://www.linkedin.com/in/josh-marcus-605085217/' }),
  ],
} as const satisfies ReadonlyDeep<MainSection>;

export default mainSectionData;
