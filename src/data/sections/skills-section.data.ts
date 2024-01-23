import type { SkillsSection } from '@/types/sections/skills-section.types';
import type { ReadonlyDeep } from 'type-fest';
import {
  apolloGraphql,
  astro,
  azure,
  aws,
  bash,
  linux,
  github_icon,
  postgreSql,
  powershell,
  prettier,
  python,
  sass,
  snowflake,
  supabase,
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
      title: '',
      skills: [
        python({
          level: 5,
          description:
            'Experience with Python in many contexts, including data science, services and interacting with Cloud provider services such as AWS.',
        }),
        typescript({
          level: 3,
          description: 'Experience writing and contributing to both frontend and backend applications.',
        }),
        powershell({
          level: 4,
          description: 'Experience using Powershell for scripting purposes as well as allowing larger applications to interact with Enterprise Microsoft services.',
        }),
        postgreSql({ level: 2 }),
        github_icon({ level: 4 }),
        bash({
          level: 4,
          description: 'Bash scripting as well as contextual configuration changes in CI/CD pipelines and other such contexts.',
        }),
        aws({ level: 3,
          description: 'Experience managing a wide variety of AWS services, including ECS, EKS, Batch, S3, Lambda, Secrets Manager, etc.',
        }),
        azure({
          level: 4,
          description:
            'Served as a System Administrator and later managed a SysAdmin team for a company using Microsoft and Azure as a major component of its setup.',
        }),
        astro({ level: 2,
          description: 'Experience using Astro to build static sites.',}),
      ],
    },
    // {
    //   title: 'I want to learn',
    //   skills: [apolloGraphql(), astro(), supabase(), cypress()],
    // },
  ],
} as const satisfies ReadonlyDeep<SkillsSection>;

export default skillsSectionData;
