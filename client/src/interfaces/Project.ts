import { Category } from "./Category";

export interface Project {
    _id: string
    name: string;
    short_description_en: string;
    short_description_tr: string;
    short_description_ar: string;

    description_en: string;
    description_tr: string;
    description_ar: string;

    visit_url: string;
    github_url: string;

    main_image:string;
    project_images:Array<string>;

    category:Category;

    createdAt:Date,
    updatedAt:Date
}