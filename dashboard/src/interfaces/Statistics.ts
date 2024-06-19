import { Category } from './Category';
import { Certificast } from '.';
import { Skill } from '.';
import { Project } from './Project';


export interface Statistics {
  categories: CategoryStatistics;
  certificates: CertificateStatistics;
  skills: SkillStatistics;
  projects: ProjectStatistics;
  users: UserStatistics;
  contacts: ContactStatistics;
}

export interface CategoryStatistics {
  totalCount: number;
  categories: Category[];
}

export interface CertificateStatistics {
  totalCount: number;
  latestCertificate: Certificast | null;
}

export interface SkillStatistics {
  totalCount: number;
  skills: Skill[];
}

export interface ProjectStatistics {
  totalCount: number;
  latestProject: Project | null;
}

export interface UserStatistics {
  totalCount: number;
}

export interface ContactStatistics {
  totalContacts: number;
  unreadContacts: number;
}
