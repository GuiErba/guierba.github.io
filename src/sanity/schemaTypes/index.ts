import type { SchemaTypeDefinition } from 'sanity';
import { profileType } from './profile';
import { skillGroupType } from './skillGroup';
import { experienceType } from './experience';
import { projectType } from './project';
import { educationType } from './education';

export const schemaTypes: SchemaTypeDefinition[] = [
  profileType,
  skillGroupType,
  experienceType,
  projectType,
  educationType,
];
