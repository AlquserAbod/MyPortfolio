export interface Project {
    title: string,
    description: string,
    images: Array<string>,
    category: string
    tags: Array<string>,
    githubLink: string,
    visitorDownloadLink: string
}


export enum ProjectCategories {
    All = 'All',
    Backend = 'Backend',
    Frontend = 'Frontend',
    Fullstack = 'Fullstack',
    AndroidApplications = 'AndroidApplications'
  }
