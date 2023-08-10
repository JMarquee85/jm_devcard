import type { ExperienceSection } from '@/types/sections/experience-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { facebook, github, instagram, linkedin, twitter, website } from '../helpers/links';
import {
  aws,
  azure,
  bash,
  chakraUi,
  eslint,
  firebase,
  nextJs,
  nx,
  pnpm,
  postgreSql,
  python,
  react,
  reactQuery,
  tailwindCss,
  typescript,
  vue,
} from '../helpers/skills';

const experienceSectionData = {
  config: {
    title: 'Work experience',
    slug: 'experience',
    icon: 'fa6-solid:suitcase',
    visible: true,
  },
  jobs: [
    {
      role: 'Platform and DevOps Engineer',
      company: 'Talkiatry',
      image: import('@/assets/logos/google-logo.jpg'),
      dates: [new Date('2023-03'), null],
      description: `
        - Write applications, tools and services in Python, Typescript, PowerShell, Bash, and other languages
        - Interact with Postgres, Snowflake, and other database services
        - Design and configure Terraform modules to manage resources through Infrastructure as Code (IaC)
        - Administer a wide range of AWS services (ECS, EKS, Batch, S3, Lambda,
          Secrets Manager, etc.)`,
      tagsList: {
        title: 'Technologies',
        tags: [typescript(), postgreSql(), python(), bash(), aws(), azure()],
      },
      links: [website({ url: 'https://talkiatry.com' })],
    },
    {
      role: 'Manager of IT Services, System Administration',
      company: 'Talkiatry',
      image: import('@/assets/logos/facebook-logo.png'),
      dates: [new Date('2021-07'), new Date('2021-07')],
      description: `
        - Aenean eget ultricies felis. Pellentesque dictum massa ut tellus eleifend, sed posuere massa mattis.
        - Ut posuere massa lacus, eleifend molestie tortor auctor vel.
        - Sed sed sollicitudin eros, id ultricies mi. Aliquam sodales elit vel ante tempor, non vehicula nibh facilisis.
        - Cras feugiat ultricies maximus. Aliquam tristique ex odio, ac semper urna accumsan a.
      `,
      tagsList: {
        title: 'Technologies',
        tags: [react(), reactQuery(), chakraUi(), eslint()],
      },
      links: [website({ url: '#' }), instagram({ url: '#' })],
    },
    {
      role: 'Junior front-end developer',
      company: 'GitLab',
      image: import('@/assets/logos/gitlab-logo.png'),
      dates: [new Date('2016-09'), new Date('2019-04')],
      description: `
        Nulla volutpat justo ante, rhoncus posuere massa egestas in:

        - Quisque pellentesque, dolor nec sollicitudin iaculis, sem velit consequat ligula, eget tempus ligula leo et est.
        - Maecenas ut elit sit amet nibh maximus condimentum in nec lorem. Pellentesque tincidunt odio vel leo suscipit, in interdum mi gravida.

        Donec non vulputate augue 🤓
      `,
      tagsList: {
        title: 'Technologies',
        tags: [vue(), tailwindCss(), pnpm()],
      },
      links: [twitter({ url: '#' }), github({ url: '#' })],
    },
  ],
} as const satisfies ReadonlyDeep<ExperienceSection>;

export default experienceSectionData;
