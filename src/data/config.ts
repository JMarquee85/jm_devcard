import type { Config } from '@/types/data';
import { enUS } from 'date-fns/locale';
import type { ReadonlyDeep } from 'type-fest';

const config = {
  i18n: {
    locale: enUS,
    dateFormat: 'MMMM yyyy',
    translations: {
      now: 'now',
    },
  },
  meta: {
    title: 'Josh Marcus - Full Stack Software Engineer',
    description:
      'At home with Python, Bash and PowerShell scripting. Extensive experience as an AWS and Azure engineer, deploying enterprise technologies and solving problems through automation tools such as Terraform, CircleCI, and GitHub Actions. I have experience developing technical solutions in a highly regulated environment, particularly healthcare.',
    faviconPath: '/src/assets/jm.jpg',
  },
  pdf: {
    footer:
      'I hereby give consent for my personal data included in my application to be processed for the purposes of the recruitment process.',
  },
} as const satisfies ReadonlyDeep<Config>;

export default config;
