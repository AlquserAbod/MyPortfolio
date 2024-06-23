import { Category } from ".";

export interface Skill {
    _id: string
    name: string;
    proficiency: number;
    category: Category;
    icon: string;
}