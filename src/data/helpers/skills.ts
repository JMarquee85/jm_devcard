import createSkillFactory from '@/data/_internals/create-skill-factory';

/*

Place where you can define all your skills.
This way, you can ensure one skill has the same name, icon, and URL among all resume sections.

Where skills are used:
- experience-section.data.ts
- portfolio-section.data.ts
- skills-section.data.ts

Usage examples:
skill() — returns skill object without any customizations.
skill({ level: 3 }) — returns a levelled-skill. It can be used only in skills-section.data.ts.
skill({ name: '...' }) — returns skill object with a custom name.
skill({ description: '...' }) — returns skill with a description displayed when user hovers over it.

*/

export const apolloGraphql = createSkillFactory({
  name: 'Apollo GraphQL',
  icon: 'simple-icons:apollographql',
  iconColor: '#311C87',
  url: 'https://www.apollographql.com/',
});

export const astro = createSkillFactory({
  name: 'Astro',
  icon: 'simple-icons:astro',
  iconColor: '#BC52EE',
  url: 'https://astro.build/',
});

export const aws = createSkillFactory({
  name: 'AWS',
  icon: 'simple-icons:amazonaws',
  iconColor: '#FF5D01',
  url: 'https://aws.amazon.com/',
});

export const azure = createSkillFactory({
  name: 'Azure',
  icon: 'simple-icons:microsoftazure',
  iconColor: '#0078D4',
  url: 'https://azure.microsoft.com',
});

export const bash = createSkillFactory({
  name: 'Bash',
  icon: 'simple-icons:gnubash',
  iconColor: '#4EAA25',
  url: 'https://gnu.org/',
});

export const docker = createSkillFactory({
  name: 'Docker',
  icon: 'simple-icons:docker',
  iconColor: '#2496ED',
  url: 'https://docker.com/',
});

export const chakraUi = createSkillFactory({
  name: 'Chakra UI',
  icon: 'simple-icons:chakraui',
  iconColor: '#319795',
  url: 'https://chakra-ui.com/',
});

export const cpanel = createSkillFactory({
  name: 'cpanel',
  icon: 'simple-icons:cpanel',
  iconColor: '#319795',
  url: 'https://cpanel.net/',
});

export const cypress = createSkillFactory({
  name: 'Cypress',
  icon: 'simple-icons:cypress',
  iconColor: '#17202C',
  url: 'https://www.cypress.io/',
});

export const eslint = createSkillFactory({
  name: 'ESLint',
  icon: 'simple-icons:eslint',
  iconColor: '#4B32C3',
  url: 'https://eslint.org/',
});

export const firebase = createSkillFactory({
  name: 'Firebase',
  icon: 'simple-icons:firebase',
  iconColor: '#FFCA28',
  url: 'https://firebase.google.com/',
});

export const github_icon = createSkillFactory({
  name: 'Github',
  icon: 'simple-icons:github',
  iconColor: '#FFFFFF',
  url: 'https://github.com/',
});

export const gitlab = createSkillFactory({
  name: 'Gitlab',
  icon: 'simple-icons:gitlab',
  iconColor: '#FC6D26',
  url: 'https://gitlab.com/',
});

export const google_cloud = createSkillFactory({
  name: 'Google Cloud Platform',
  icon: 'simple-icons:googlecloud',
  iconColor: '#4285F4',
  url: 'https://google.com/',
});

export const ios = createSkillFactory({
  name: 'iOS',
  icon: 'simple-icons:ios',
  iconColor: '#FFCA28',
  url: 'https://apple.com/',
});

export const macos = createSkillFactory({
  name: 'OSX',
  icon: 'simple-icons:macos',
  iconColor: '#000000',
  url: 'https://apple.com/',
});

export const mysql = createSkillFactory({
  name: 'MySQL',
  icon: 'simple-icons:mysql',
  iconColor: '#4479A1',
  url: 'https://apple.com/',
});

export const nestjs = createSkillFactory({
  name: 'NestJS',
  icon: 'simple-icons:nestjs',
  iconColor: '#E0234E',
  url: 'https://nestjs.com/',
});

export const nodeJs = createSkillFactory({
  name: 'nodeJS',
  icon: 'simple-icons:nodedotjs',
  iconColor: '#FFCA28',
  url: 'https://node.js/',
});

export const jest = createSkillFactory({
  name: 'Jest',
  icon: 'simple-icons:jest',
  iconColor: '#C21325',
  url: 'https://jestjs.io/',
});

export const linux = createSkillFactory({
  name: 'Linux',
  icon: 'simple-icons:linux',
  iconColor: '#C21325',
  url: 'https://linux.org/',
});

export const mongoDb = createSkillFactory({
  name: 'MongoDB',
  icon: 'simple-icons:mongodb',
  iconColor: '#47A248',
  url: 'https://www.mongodb.com/',
});

export const nestJs = createSkillFactory({
  name: 'NestJS',
  icon: 'simple-icons:nestjs',
  iconColor: '#E0234E',
  url: 'https://nestjs.com/',
});

export const nextJs = createSkillFactory({
  name: 'Next.js',
  icon: 'simple-icons:nextdotjs',
  iconColor: '#000000',
  url: 'https://nextjs.org/',
});

export const nx = createSkillFactory({
  name: 'Nx',
  icon: 'simple-icons:nx',
  iconColor: '#143055',
  url: 'https://nx.dev/',
});

export const pnpm = createSkillFactory({
  name: 'pnpm',
  icon: 'simple-icons:pnpm',
  iconColor: '#F69220',
  url: 'https://pnpm.io/',
});

export const postgreSql = createSkillFactory({
  name: 'PostgreSQL',
  icon: 'simple-icons:postgresql',
  iconColor: '#4169E1',
  url: 'https://www.postgresql.org/',
});

export const powershell = createSkillFactory({
  name: 'PowerShell',
  icon: 'simple-icons:powershell',
  iconColor: '#4169E1',
  url: 'https://learn.microsoft.com/en-us/powershell//',
});

export const prettier = createSkillFactory({
  name: 'Prettier',
  icon: 'simple-icons:prettier',
  iconColor: '#F7B93E',
  url: 'https://prettier.io/',
});

export const python = createSkillFactory({
  name: 'Python',
  icon: 'simple-icons:python',
  iconColor: '#F7B93E',
  url: 'https://python.org/',
});

export const react = createSkillFactory({
  name: 'React.js',
  icon: 'simple-icons:react',
  iconColor: '#61DAFB',
  url: 'https://reactjs.org/',
});

export const reactQuery = createSkillFactory({
  name: 'React Query',
  icon: 'simple-icons:reactquery',
  iconColor: '#FF4154',
  url: 'https://tanstack.com/query',
});

export const sass = createSkillFactory({
  name: 'SASS',
  icon: 'simple-icons:sass',
  iconColor: '#CC6699',
  url: 'https://sass-lang.com/',
});

export const snowflake = createSkillFactory({
  name: 'Snowflake',
  icon: 'simple-icons:snowflake',
  iconColor: '#CC6699',
  url: 'https://sass-lang.com/',
});

export const supabase = createSkillFactory({
  name: 'Supabase',
  icon: 'simple-icons:supabase',
  iconColor: '#3ECF8E',
  url: 'https://supabase.io/',
});

export const tailwindCss = createSkillFactory({
  name: 'Tailwind CSS',
  icon: 'simple-icons:tailwindcss',
  iconColor: '#06B6D4',
  url: 'https://tailwindcss.com/',
});

export const teams = createSkillFactory({
  name: 'Microsoft Teams',
  icon: 'simple-icons:microsoftteams',
  iconColor: '#6264A7',
  url: 'https://tailwindcss.com/',
});

export const terraform = createSkillFactory({
  name: 'Terraform',
  icon: 'simple-icons:terraform',
  iconColor: '#844FBA',
  url: 'https://tailwindcss.com/',
});

export const typescript = createSkillFactory({
  name: 'TypeScript',
  icon: 'simple-icons:typescript',
  iconColor: '#3178C6',
  url: 'https://www.typescriptlang.org/',
});

export const vue = createSkillFactory({
  name: 'Vue.js',
  icon: 'simple-icons:vuedotjs',
  iconColor: '#4FC08D',
  url: 'https://vuejs.org/',
});

export const windows = createSkillFactory({
  name: 'Windows',
  icon: 'ri:windows-fill',
  iconColor: '#4FC08D',
  url: 'https://microsoft.com/',
});
