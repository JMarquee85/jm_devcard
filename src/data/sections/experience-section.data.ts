import type { ExperienceSection } from '@/types/sections/experience-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { facebook, github, instagram, linkedin, twitter, website } from '../helpers/links';
import {
  aws,
  azure,
  bash,
  cpanel,
  docker,
  github_icon,
  gitlab,
  google_cloud,
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
      role: 'Senior Systems Engineer/ Python Developer',
      company: 'Marriott International',
      image: import('@/assets/logos/marriott.jpg'),
      dates: [new Date('2024-04'), null],
      description: `
        - Administer Microsoft Intune in a hybrid environment
        - Engineer authentication solutions organization wide
        - Write and maintain applications to automate processes in Python, Bash, PowerShell and more
        - Assist with teaching application development to co-workers
        - Maintain a high level of user experience and user satisfaction in speed to troubleshoot issues
        - Leverage Graph API and the WorkspaceOne API on a daily basis to automate workflows
        - Utilize a test driven development and unit testing strategy
        - Represent Microsoft Intune in the context of the larger enterprise architecture
        - Business analysis to understand the best solution to a given problem in a complex and global environment`,
      tagsList: {
        title: 'Technologies',
        tags: [python(), bash(), azure(), github_icon(), docker()],
      },
      links: [website({ url: 'https://marriott.com' })],
    },
    {
      role: 'Toolchain Specialist',
      company: 'RTX',
      image: import('@/assets/logos/RTXLogo.png'),
      dates: [new Date('2024-02'), null],
      description: `
          - Administer all aspects of cloud infrastructure for AWS, Microsoft Azure and Google Cloud Platform (GCP)
          - Administer Version Control Systems such as Gitlab and Github
          - Build wide variety of software using Docker and other tools
          - Implement and track infrastructure using Terraform/Cloudformation
          - Scripting in Bash, Powershell, Python, Javascript/Typescript and more
          - Deploy multi-account environment in AWS using LZA
          - Manage and optimize the computer science tooling throughout the program
          - Configured Terraform to implement networking between GCP and AWS
          - Design and implement Continuous Integration/Continuous Delivery
          - Assist with configuration management solutions
          - Assist with AWS network configurations and network operations
          - Configure and maintain cross-platform identity management across Azure, GCP, and AWS
          - Utilize a wide base of technical skills and cloud engineering methods on a daily basis`,
      tagsList: {
        title: 'Technologies',
        tags: [
          python(),
          powershell(),
          bash(),
          aws(),
          azure(),
          google_cloud(),
          github_icon(),
          gitlab(),
          terraform(),
          docker(),
        ],
      },
      links: [website({ url: 'https://rtx.com' })],
    },
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
        tags: [
          typescript(),
          postgreSql(),
          python(),
          bash(),
          nestjs(),
          nodeJs(),
          snowflake(),
          aws(),
          azure(),
          github_icon(),
          terraform(),
          docker(),
        ],
      },
      links: [website({ url: 'https://talkiatry.com' })],
    },
    {
      role: 'Manager of IT Services, System Administration',
      company: 'Talkiatry',
      image: import('@/assets/logos/talkiatry-logo.png'),
      dates: [new Date('2021-07'), new Date('2023-12')],
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
