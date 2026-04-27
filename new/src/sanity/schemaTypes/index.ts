import type { SchemaTypeDefinition } from 'sanity';
import { aboutType } from './about';
import { contactInfoType } from './contactInfo';
import { experienceType } from './experience';
import { expertiseType } from './expertise';
import { heroType } from './hero';
import { principleType } from './principle';
import { projectType } from './project';
import { siteSettingsType } from './siteSettings';
import { skillGroupType } from './skillGroup';
import { statType } from './stat';

export const schemaTypes: SchemaTypeDefinition[] = [
  siteSettingsType,
  heroType,
  statType,
  aboutType,
  expertiseType,
  experienceType,
  skillGroupType,
  projectType,
  principleType,
  contactInfoType,
];
