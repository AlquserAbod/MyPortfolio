export interface Project {
    id: number,
    title: string,
    description: string,
    image: string,
    category: string
    tags: Array<string>,
    githubLink: string,
    visitorDownloadLink: string
}


export enum ProjectCategories {
    All = 'All',
    Frontend = 'Frontend',
    Fullstack = 'Fullstack',
    AndroidApplications = 'AndroidApplications'
  }
