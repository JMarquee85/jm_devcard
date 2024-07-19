import type { ExperienceSection } from '@/types/sections/experience-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { facebook, github, instagram, linkedin, twitter, website } from '../helpers/links';
import {
  aws,
  azure,
  bash,
  cpanel,
  github_icon,
  ios,
  linux,
  macos,
  nestjs,
  nodeJs,
  postgreSql,
  powershell,
  python,
  snowflake,
  terraform,
  typescript,
  windows,
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
      image: import('@/assets/logos/talkiatry-logo.png'),
      dates: [new Date('2023-03'), new Date('2024-04')],
      description: `
        - Write and debug applications and services in Typescript, Python, Bash, and other languages
        - Write applications, tools and services in Python, Typescript, PowerShell, Bash, and other languages
        - Interact with and manage Postgres, Snowflake, and other database services
        - Design and configure Terraform modules to manage resources through Infrastructure as Code (IaC)
        - Administer a wide range of AWS services (ECS, EKS, Batch, S3, Lambda,
          Secrets Manager, etc.)`,
      tagsList: {
        title: 'Technologies',
        tags: [typescript(), postgreSql(), python(), bash(), nestjs(), nodeJs(), snowflake(), aws(), azure(), github_icon(), terraform()],
      },
      links: [website({ url: 'https://talkiatry.com' })],
    },
    {
      role: 'Manager of IT Services, System Administration',
      company: 'Talkiatry',
      image: import('@/assets/logos/talkiatry-logo.png'),
      dates: [new Date('2021-07'), new Date('2023-03')],
      description: `
        - Configured wide variety of applications for enterprise use
        - Oversaw team of six System Administrators
        - Managed Azure Active Directory and other Microsoft services
        - Developed workflow to automate user onboarding, including account procurement, device setup, and application configuration
        - Configured and managed zero-touch deployment strategies using Microsoft Autopilot and Mosyle
        - Oversaw PoCs for potential application vendors and services
      `,
      tagsList: {
        title: 'Technologies',
        tags: [azure(), powershell(), python(), windows(), macos()],
      },
      links: [website({ url: 'https://talkiatry.com' })],
    },
    {
      role: 'Advanced Technical Support Supervisor',
      company: 'NYC Dept. of Health/ MTX',
      image: import('@/assets/logos/nychealth.jpeg'),
      dates: [new Date('2021-02'), new Date('2021-07')],
      description: `
        - Provided help desk support to medical and non-medical personnel distributing the COVID-19 vaccine
        - Provided hardware and software support on iOS and Windows devices
        - Interfaced with MTX management to ensure HIPAA compliance
      `,
      tagsList: {
        title: 'Technologies',
        tags: [ios()],
      },
      links: [website({ url: 'https://www.nyc.gov/site/doh/index.page' })],
    },
    {
      role: 'Technical Support Representative',
      company: 'InMotion Hosting',
      image: import('@/assets/logos/inmotionhosting.png'),
      dates: [new Date('2017-06'), new Date('2018-02')],
      description: `
        - Provided Linux support or web hosting clients
        - Provided technical support via phone, email, and live chat
        - Diagnosed issues related to Wordpress and other content management systems
        - Assisted customers with DNS setup for domains, mail, verification records, etc.
      `,
      tagsList: {
        title: 'Technologies',
        tags: [linux(), cpanel()],
      },
      links: [website({ url: 'https://inmotionhosting.com' })],
    },
  ],
} as const satisfies ReadonlyDeep<ExperienceSection>;

export default experienceSectionData;
