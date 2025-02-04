import type { PortfolioSection } from '@/types/sections/portfolio-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { demo, github, mockups, website } from '../helpers/links';
import {
  aws,
  chakraUi,
  docker,
  firebase,
  jest,
  github_icon,
  mysql,
  nx,
  pnpm,
  python,
  azure,
  postgreSql,
  powershell,
  react,
  snowflake,
  teams,
  terraform,
  typescript,
  nodeJs,
} from '../helpers/skills';

const portfolioSectionData = {
  config: {
    title: 'Projects',
    slug: 'projects',
    icon: 'fa6-solid:rocket',
    visible: true,
    screenshots: {
      title: 'Screenshots',
      icon: 'fa6-solid:images',
    },
  },
  projects: [
    {
      name: 'UEM Mobile Shared Devices',
      image: import('@/assets/portfolio/project-1.jpeg'),
      dates: [new Date('2024-11'), null],
      details: [
        { label: 'Team size', value: '1 person' },
        { label: 'My role', value: ['Developer', 'Designer'] },
        { label: 'Company', value: 'Marriott International' },
        { label: 'Category', value: ['Scripting', 'Device Management', 'CI/CD', 'Configuration as Code'] },
      ],
      pdfDetails: [
        { label: 'Demo', value: 'https://golden-bulls-d73jd7.netlify.app', url: '#' },
        { label: 'Repository', value: 'https://github.com/mark-freeman/golden-bulls', url: '#' },
      ],
      screenshots: [
        { src: import('@/assets/portfolio/project-1-screenshot-1.jpg'), alt: 'First screenshot' },
        { src: import('@/assets/portfolio/project-1-screenshot-2.jpg'), alt: 'Second screenshot' },
        { src: import('@/assets/portfolio/project-1-screenshot-3.jpg'), alt: 'Third screenshot' },
      ],
      description:
        'This application automated the creation and deployment of infrastructure to enroll shared iOS and Android devices in Microsoft Intune. The application handled the creation of a group structure that organized other dynamic groups by role, applied those groups to relevant policies, created dynamic groups looking for devices deployed under the related enrollment profile and added those dynamic groups to their corresponding overarching groups, added groups to apps to grant device access to applications, added Android enrollment profile tokens and QR codes and created and stored PDFs with Android enrollment QR codes for distribution to users with a need to enroll those devices. This application was deployed using a CI/CD workflow and an input list externalized to allow an additional userbase to kick off deployments for properties in need of shared device infrastructure both in development and production environments.',
      tagsList: {
        title: 'Technologies',
        tags: [python(), azure(), github_icon()],
      },
      links: [mockups({ url: '#' }), demo({ url: '#' })],
    },
    {
      name: 'ADP2AAD',
      image: import('@/assets/portfolio/project-1.jpeg'),
      dates: [new Date('2022-03'), null],
      details: [
        { label: 'Team size', value: '1 person' },
        { label: 'My role', value: ['Developer', 'Designer'] },
        { label: 'Company', value: 'Talkiatry' },
        { label: 'Category', value: ['Scripting', 'User Management'] },
      ],
      pdfDetails: [
        { label: 'Demo', value: 'https://golden-bulls-d73jd7.netlify.app', url: '#' },
        { label: 'Repository', value: 'https://github.com/mark-freeman/golden-bulls', url: '#' },
      ],
      screenshots: [
        { src: import('@/assets/portfolio/project-1-screenshot-1.jpg'), alt: 'First screenshot' },
        { src: import('@/assets/portfolio/project-1-screenshot-2.jpg'), alt: 'Second screenshot' },
        { src: import('@/assets/portfolio/project-1-screenshot-3.jpg'), alt: 'Third screenshot' },
      ],
      description:
        'This project solved a user management issue at Talkiatry by automating the update and correction of user information. This was accomplished by accessing information pulled from ADP into Snowflake. The application, written primarily in Python, polls the Snowflake information, checking it against the user information that exists in Azure AD for that user and updates it if there are changes. The solution runs using Amazon Batch and is triggered as a cron job. The application runs in a Docker container that is built with a CircleCI pipeline, which pushes the image to AWS ECR and runs the container via AWS ECS.',
      tagsList: {
        title: 'Technologies',
        tags: [python(), aws(), azure(), snowflake()],
      },
      links: [mockups({ url: '#' }), demo({ url: '#' })],
    },
    {
      name: 'BinkJS',
      image: import('@/assets/portfolio/project-2.jpeg'),
      dates: [new Date('2023-12'), null],
      details: [
        { label: 'Team size', value: '2 people' },
        { label: 'My role', value: ['Contributor'] },
        // { label: 'Company', value: 'Facebook' },
        { label: 'Category', value: ['Web app'] },
      ],
      pdfDetails: [
        { label: 'Demo', value: 'https://tru-quest-ck7ea3.netlify.app', url: '#' },
        { label: 'Repository', value: 'https://github.com/mark-freeman/tru-quest', url: '#' },
      ],
      description:
        'BinkJS is a musical archival site originally developed using PHP, Ajax, and Ruby on Rails. This project is to refactor the site using Node.js. I have assisted in changes to the local development experience, testing and troubleshooting of issue, database management, and many other tasks.',
      tagsList: {
        title: 'Technologies',
        tags: [nodeJs(), mysql(), docker(), aws()],
      },
      links: [mockups({ url: '#' }), demo({ url: 'https://js.binkmusic.com' })],
    },
    {
      name: 'PDF Forwarder for Doggy Daycare',
      image: import('@/assets/portfolio/project-3.jpeg'),
      dates: [new Date('2018-01'), new Date('2020-12')],
      details: [
        { label: 'Team size', value: '3 people' },
        { label: 'My role', value: ['Developer', 'Designer'] },
        { label: 'Company', value: 'None' },
        { label: 'Category', value: ['Application', 'Workflow'] },
      ],
      pdfDetails: [
        { label: 'Demo', value: 'https://software-chasers-e82l8e.netlify.app', url: '#' },
        { label: 'Repository', value: 'https://github.com/mark-freeman/software-chasers', url: '#' },
      ],
      description:
        'DocForwarder was an application designed to take a paper application form for potential clients of the doggy daycare and host the process electronically. Potential clients were asked to go to a Google Form to fill out the needed information. Their reponses were parsed and inserted into the original PDF and sent to the office for processing.',
      tagsList: {
        title: 'Technologies',
        tags: [python(), github_icon()],
      },
      links: [website({ url: '#' }), github({ url: '#' })],
    },
    {
      name: 'Teams Automation for New Hires',
      image: import('@/assets/portfolio/project-4.jpeg'),
      dates: [new Date('2021-09'), new Date('2022-02')],
      details: [
        { label: 'Team size', value: '1 person' },
        { label: 'My role', value: 'Developer' },
        { label: 'Company', value: 'Talkiatry' },
        { label: 'Category', value: ['Script', 'Workflow'] },
      ],
      pdfDetails: [
        { label: 'Demo', value: 'https://disco-ninjas-g321ol.netlify.app', url: '#' },
        { label: 'Repository', value: 'https://github.com/mark-freeman/disco-ninjas', url: '#' },
      ],
      description:
        'This project is a script that aided in assignment to private channels within Microsoft Teams. The script was intended to run regularly to ensure that incoming new hires were assigned as intended. The script polled Azure AD based on job title and assigned them to the channels needed based on that information.',
      tagsList: {
        title: 'Technologies',
        tags: [powershell(), teams()],
      },
      links: [mockups({ url: '#' }), github({ url: '#' })],
    },
  ],
} as const satisfies ReadonlyDeep<PortfolioSection>;

export default portfolioSectionData;
