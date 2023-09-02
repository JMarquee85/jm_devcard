import type { SkillsSection } from '@/types/sections/skills-section.types';
import type { ReadonlyDeep } from 'type-fest';
import {
  apolloGraphql,
  astro,
  azure,
  aws,
  bash,
  chakraUi,
  cypress,
  eslint,
  firebase,
  linux,
  mongoDb,
  nestJs,
  pnpm,
  postgreSql,
  powershell,
  prettier,
  python,
  react,
  sass,
  snowflake,
  supabase,
  tailwindCss,
  typescript,
} from '../helpers/skills';

const skillsSectionData = {
  config: {
    title: 'Skills',
    slug: 'skills',
    icon: 'fa6-solid:bars-progress',
    visible: true,
  },
  skillSets: [
    {
      // title: 'I already know',
      skills: [
        python({
          level: 5,
          description:
            'Proin ut erat sed massa tempus suscipit. Mauris efficitur nunc sem, nec scelerisque ligula bibendum ut.',
        }),
        typescript({
          level: 3,
          description: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
        }),
        powershell({
          level: 4,
          description: 'Nulla interdum pellentesque ultricies. Ut id eros commodo, ultrices ligula eu, elementum ante.',
        }),
        astro({ level: 2 }),
        postgreSql({ level: 2 }),
        bash({ level: 4 }),
        aws({ level: 3 }),
        azure({
          level: 4,
          description:
            'Nulla tempor turpis at vehicula pharetra. Vestibulum tellus tortor, commodo et suscipit id, lobortis id nunc.',
        }),
      ],
    },
    // {
    //   title: 'I want to learn',
    //   skills: [apolloGraphql(), astro(), supabase(), cypress()],
    // },
  ],
} as const satisfies ReadonlyDeep<SkillsSection>;

export default skillsSectionData;
