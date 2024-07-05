// types/PaginationTypes.ts

export type PaginationModel = {
  pageSize: number;
  page: number;
};

export enum PaginationKey {
  Skills = 'skills',
  Users = 'users',
  Projects = 'projects',
  Contacts = 'contacts',
  Categories = 'categories',
  Certificates =  'certificates'
}  
