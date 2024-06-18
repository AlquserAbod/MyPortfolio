import { Category } from ".";

export interface Skills {
    _id: string
    name: string;
    proficiency: number;
    category: Category;
    icon: string;
}